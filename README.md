The official UMCP TASA Website 2.0
Designed by Owen Luo

# Family Tree
Family tree information is stored at: https://docs.google.com/spreadsheets/d/1NZM7qljnp6zryL-H3C5VzEU28Gz9cWAs-SMslCu0LCY/edit?usp=sharing 

Files for generating the family tree json file are stored at: [familytree](familytree)

JSON file containing family tree information stored at: [assets/json/familytree.json](assets/json/familytree.json)

## Updating Family Tree
Adding people:
1. Add row containing
    1. Name
    2. Year
    3. Board Positions (if applicable)
    4. Big
2. Copy the formulas for **Generation** and **Littles** from another cell
    1. Be sure to fill these cells out otherwise the references for other cells may go wack
2. Generation and littles will auto-update
    1. Generation is big's generation + 1
    2. Littles is all people who have the current person listed as a big

## Generating a new JSON File
After updating the family tree, you can generate a new JSON file using the script [familytree/gen_family_json.py](familytree/gen_family_json.py). 

1. Install [Google Sheets Python API](https://developers.google.com/sheets/api/quickstart/python) and [JSONPickle](http://jsonpickle.github.io/index.html) by running
```
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib -U jsonpickle
```
2. Make sure you have [`credentials.json`](#getting-credentials)
3. Make sure the parameters in [familytree/gen_family_json.py](familytree/gen_family_json.py) are correct
    1. `SPREADSHEET_ID`: Spreadsheet ID for the sheet. More info [here](https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id)
    2. `RANGE_NAME`: Range of cells containing our data. Will need to change if adding people or columns. More info about ranges [here](https://developers.google.com/sheets/api/guides/concepts#a1_notation)
    3. Various indexes for the columns in the sheet
    4. `JSON_PATH`: Path where the `familytree.json` file will be generated to
4. Run ```python gen_family_json.py```
5. If this is your first time running, you'll be redirected to a login. Sign in with TASA email
6. File should be generated!

Notes: I had trouble running it on my Bash subsystem for Windows, so you might have to run it with Command Prompt

## Getting Credentials
Since we don't want to publish our secret key for the Sheets API, you'll have to download it and copy it as `credentials.json` into [familytree/credentials.json](familytree/credentials.json). Get the file from our TASA drive. Details to generate it can be found at the Google Sheets API quickstart page: https://developers.google.com/sheets/api/quickstart/python

# React
React is a framework for making user interfaces. You can find the docs at https://reactjs.org/
We're also using [JSX](https://reactjs.org/docs/introducing-jsx.html) which is a syntax extension for JavaScript. Our JSX src files lie in our src folder and have to be compiled into JavaScript that the browser can use. 

Our react files reside in [`src/react/](src/react/). In this form, they aren't usable by the browser since we're using Babel and Flow syntax. So, we have to compile it and move it into the [`assets/components/`](assets/components) folder.

Anytime you want to make changes to a components, do it in [`src/react/](src/react/)!

Run the following to compile the files in `src/react` into usable JavaScript files in `assets/components`

```
./node_modules/.bin/babel src/react -d assets/components/
```

## Why React?
You can have the same components on multiple pages (ex: headers and footers), and you only have to change them in one place! 

React also provides massive performance benefits if the entire application is made out of it. Unfortunately, we're not at that stage yet, but we can still make use of smaller components! 

## Flow
Flow is a static type-checker for JavaScript. You can find the docs at https://flow.org/en/

To start flow run:
```npm run flow```