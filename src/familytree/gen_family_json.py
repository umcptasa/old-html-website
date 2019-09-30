from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

from typing import List

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SPREADSHEET_ID = '1NZM7qljnp6zryL-H3C5VzEU28Gz9cWAs-SMslCu0LCY'
RANGE_NAME = 'People!A2:N200'


def main():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
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

    # Data object holding
    tree = {
        "name": "Founders",
        "attributes": {},
        "children": []
    }

    if not values:
        print('No data found.')
    else:
        generations: List[List[str]] = splitGenerations(values)
        i: int = 0
        for gen in generations:
            print('Generation %d' % (i))
            for row in gen:
                print('%s, %s' % (row[0], row[1]))
            i = i + 1
            print('###################################################')
        #print('Name, Year:')
        # for row in values:
            # Print columns A and E, which correspond to indices 0 and 4.
            #print('%s, %s' % (row[0], row[1]))

    # Alg to add
    '''
     Alphabetical order names or sort by generation?
     Ooo maybe split into lists of generations first
     1. Depth first adding from list then looking through next generation adding all children
     2. Remove from list once added
    '''


class Person:
    def __init__(self, name: str, year: int, positions: str):
        self.name: str = name
        self.year: int = year
        self.positions: List[str] = positions.split(',')
        self.children: List[Person] = []


def splitGenerations(values) -> List[List[str]]:
    data: List[List[str]] = []
    for row in values:
        generation: int = int(row[4])

        # If generation doesn't exist, make it!
        if len(data) <= generation:
            data.append([])

        data[generation].append(row)

    return data


if __name__ == '__main__':
    main()
