var CLIENT_ID = '1036683548218-qhlo754k3jkspbhcuttavdt0a00ugrbq.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

/**
*  On load, called to load the auth2 library and API client library.
*/
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
*  Initializes the API client library and sets up sign-in state
*  listeners.
*/
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function() {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

/**
*  Called when the signed in status changes, to update the UI
*  appropriately. After a sign-in, the API is called.
*/
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        alert('Signed in');
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        pullDataFromSheet();
        fillTable();
    } else {
        alert("Not signed in");
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
*  Sign in the user upon button click.
*/
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
             *  Sign out the user upon button click.
             */
            function handleSignoutClick(event) {
              gapi.auth2.getAuthInstance().signOut();
            }


/**
* Print the names and majors of students in a sample spreadsheet:
* https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
*/
function pullDataFromSheet() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1EqqgCV03NuBFQnEJTJ2iLpu5UjxG0ZIsRb8X9b20kqc',
        range: 'Bigs!A:G',
    }).then(function(response) {
        response.values.forEach(function(row) {
            addPerson(row);
        });
    }, function(response) {
        alert('Error: ' + response.result.error.message);
    });
}
