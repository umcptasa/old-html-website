from __future__ import print_function
import pickle
import os.path
import jsonpickle
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

from typing import List
from math import floor

DEBUG = False
JSON_PATH = './assets/json/familyTree.json'

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SPREADSHEET_ID = '1NZM7qljnp6zryL-H3C5VzEU28Gz9cWAs-SMslCu0LCY'
RANGE_NAME = 'People!A2:N200'

# Index of columns in spreadsheet
NAME_INDEX = 0
YEAR_INDEX = 1
POSITIONS_INDEX = 2
BIG_INDEX = 3
GENERATION_INDEX = 4
LITTLE_INDEX = 5
END_INDEX = 13

Row = List[str]
Generations = List[List[Row]]


class Attributes:
    year: str
    positions: List[str]

    def __init__(self, row: Row) -> None:
        if(len(row) < POSITIONS_INDEX):
            self.year = ""
            self.positions = [""]
        else:
            self.year = row[YEAR_INDEX]

            # Parse positions and strip whitespace
            positions = row[POSITIONS_INDEX].split(',')
            for i in range(0, len(positions)):
                positions[i] = positions[i].strip()

            self.positions = positions


class Person:
    name: str
    attributes: Attributes
    children: List['Person']

    def __init__(self, name: str = "") -> None:
        self.name: str = name
        self.attributes = Attributes([])
        self.children: List['Person'] = []

    def fromRow(self, row: Row) -> 'Person':
        if DEBUG:
            print(row)
        self.name = row[NAME_INDEX]
        self.attributes = Attributes(row)
        return self

    def addChild(self, person: 'Person') -> None:
        self.children.append(person)


def splitGenerations(values) -> Generations:
    '''
    Splits the ValueRange given by Google Sheets into generations
    specified by the Generation column in the sheet
    '''
    data: Generations = []
    for row in values:
        generation: int = int(row[GENERATION_INDEX])

        # If generation doesn't exist, make it!
        while len(data) <= generation:
            data.append([])

        data[generation].append(row)

    return data


def search(generation: List[Row], name: str) -> Row:
    '''
    Assumes people in generation are sorted in alphabetical order
    Searches with binary search
    Returns an empty row if no one found
    '''
    if DEBUG:
        print('~~~~Search for %s~~~~' % (name))

    n: int = len(generation)
    left: int = 0
    right: int = n - 1
    while(left <= right):
        mid: int = floor((right + left) / 2)
        person: Row = generation[mid]

        if DEBUG:
            print("Current: %s" % (person[NAME_INDEX]))

        if person[NAME_INDEX] == name:
            return person
        elif person[NAME_INDEX] < name:
            left = mid + 1
        else:
            right = mid - 1

    if DEBUG:
        print('No one found :(')
    return []


def processChild(generations: Generations, cur_gen: int, name: str) -> Person:
    '''
    Adds children depth first by recursively going through children
    and adding their children until there are no more children in that line

    Removes from generation once processed to speed up later processing
    '''

    row: Row = search(generations[cur_gen], name)
    person = Person().fromRow(row)
    if DEBUG:
        print('***************************************')
        print('Generation: %d: %s, %s' %
              (cur_gen, row[NAME_INDEX], row[YEAR_INDEX]))

    i = LITTLE_INDEX
    while i < len(row):
        if(row[i] == ""):
            if DEBUG:
                print('No more children')
        else:
            child = processChild(generations, cur_gen + 1, row[i])
            person.addChild(child)
        i += 1

    generations[cur_gen].remove(row)
    return person


def main():
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=SPREADSHEET_ID,
                                range=RANGE_NAME).execute()
    values = result.get('values', [])

    # Data object holding family tree
    root = Person("Founder")

    if not values:
        print('No data found.')
    else:
        generations: List[List[str]] = splitGenerations(values)

        # Iterate over all of the founders (generation 0)
        for row in generations[0]:
            # Pass in the row to extract out parameters
            founder = Person().fromRow(row)
            if DEBUG:
                print('- - - - - - - - - - - - - - - - - - - - - - - - -')
                print('Founder: %s' % (row[0]))

            # Loop over children. Duplicated here since we don't need to search
            # for the founders
            i: int = LITTLE_INDEX
            while i < len(row):
                if(row[i] == ""):
                    if DEBUG:
                        print('Empty')
                else:
                    child = processChild(generations, 1, row[i])
                    founder.addChild(child)
                i += 1
            root.addChild(founder)

    # Writing to file
    with open(JSON_PATH, "w") as file:
        output = jsonpickle.encode(root, unpicklable=False)
        file.write(output)
        print('Written to %s' % (JSON_PATH))


if __name__ == '__main__':
    main()
