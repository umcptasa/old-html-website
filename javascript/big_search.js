var ALL_GROUPS = [];
var ALL_MAJORS = [];
var ALL_PEOPLE = [];

/**
* Pulls data from the GoogleSheet
* Then fills the table
* Fills the majors and the groups used in the filter
**/
$(document).ready(function() {
    Tabletop.init({
        key: '1EqqgCV03NuBFQnEJTJ2iLpu5UjxG0ZIsRb8X9b20kqc',
        callback: function(data, tabletop) {
            data.forEach(addPerson);
            fillTable();
            fillMajors();
            fillGroups();
        },
        simpleSheet: true
    });
});

/*
* Person object
* Calls parseStudentGroups in order to split the groups and add them to the global array
*/
function Person(name, major, year, dorm, studentGroups, loveLanguages) {
    this.name = name;
    this.id = name.replace(" ", "_");
    this.majorText = major;
    this.major = parseMajor(major);
    this.year = year;
    this.dorm = dorm;
    this.studentGroupsText = studentGroups;
    this.studentGroups = parseStudentGroups(studentGroups);
    this.loveLanguagesText = loveLanguages;
    this.loveLanguages = loveLanguages.split(",");
}

/*
* Splits the string between the commas, and returns an array containing those values
* Adds all of the individual student groups into the global array ALL_MAJORS
*/
function parseMajor(majorText) {
     var arrayMajor = majorText.split(",");

     arrayMajor.forEach(function(major) {
        //Checks if the group already exists in the array
        if(ALL_MAJORS.indexOf(major) == -1) {
            ALL_MAJORS.push(major);
        }
     });

     return arrayMajor;
}

/*
* Splits the string between the commas, and returns an array containing those values
* Adds all of the individual student groups into the global array ALL_GROUPS
*/
function parseStudentGroups(studentGroups) {
     var arrayGroups = studentGroups.split(",");

     arrayGroups.forEach(function(group) {
        //Checks if the group already exists in the array
        if(ALL_GROUPS.indexOf(group) == -1) {
            ALL_GROUPS.push(group);
        }
     });

     return arrayGroups;
}


/*
* Called from the Tabletop initialization. Called on each row in the GoogleSheet
* Creates a new person from the information provided and pushes the new person to the global array ALL_PEOPLE
*/
function addPerson(row) {
    var person = new Person(row.Name, row.Major, row.Year, row.Dorm, row.Groups, row.LoveLanguage);
    ALL_PEOPLE.push(person);
}

/*
* For every person in the array ALL_PEOPLE, create an entry for them in the table
* Uses a Handlebars template declared in blsearch.html
* Creates an overview for the person
*/
function fillTable() {
    var entryTemplate = Handlebars.compile($("#entryTemplate").html());

    ALL_PEOPLE.forEach(function(person) {
        //Adds the entry to the table
        var personHTML = entryTemplate(person);
        $("#searchTable").append(personHTML);

        //Creates the overview for the person that'll appear onclick
        $("#" + person.id).click(function(){
            $("#" + person.id + "overview").show(function() {
                document.body.addEventListener('click', closeOverview, false);
            });
        });
    });
}

/*
* Shows the overview for the person when clicked. Added in the HTML
*/
function showOverview(id) {
    $(id).show(function() {
        document.body.addEventListener('click', closeOverview, false);
    })
}

/*
* Closes all overviews when the user clicks on anything that isn't an overview
*/
function closeOverview(e) {
    if(e.target.class != "overview") {
        document.body.removeEventListener('click', closeOverview, false);
        $('.overview').hide();
    }
}

/*
* Fills the filterMajor table with all of the majors
* Uses a Handlebars template defined in blsearch.html
*/
function fillMajors() {
    var majorTemplate = Handlebars.compile($("#majorTemplate").html());

    ALL_MAJORS.forEach(function(major) {
        var entryHTML = majorTemplate({
            id: major.replace(" ", "_"),
            name: major
        });
        $("#filterMajor").append(entryHTML);
    });

}

/*
* Fills the filterGroups table with all of the groups
* Uses a Handlebars template defined in blsearch.html
*/
function fillGroups() {
    var groupTemplate = Handlebars.compile($("#groupTemplate").html());

    ALL_GROUPS.forEach(function(group) {
        var entryHTML = groupTemplate({
            id: group.replace(" ", "_"),
            name: group
        });
        $("#filterGroups").append(entryHTML);
    });

}

/*
* Checks if the person's major is checked in the Advanced Options
* Note: by default all of the majors are checked
* As long as one of the majors is selected, then shown
*/
function majorChecked(person) {
    var majors = person.major, length = majors.length;

    for(i = 0; i < length; i++) {
        if($("#" + majors[i].replace(" ", "_")).is(":checked")) {
            return true;
        }
    }

    return false;
}

/*
* Checks if the person's group is checked in the Advanced Options
* Note: by default all of the groups are checked
* As long as one of the groups is selected, then shown
*/
function groupChecked(person) {
    var groups = person.studentGroups, length = groups.length;

    for(i = 0; i < length; i++) {
        if($("#" + groups[i].replace(" ", "_")).is(":checked")) {
            return true;
        }
    }

    return false;
}

/*
* The search filter
* Called whenever the user types into the searchInput HTML element
*/
function filter() {
  var input, arrayLength;
  input = $("#searchInput").val().toUpperCase();

  ALL_PEOPLE.forEach(function(person) {
     if(person.name.toUpperCase().indexOf(input) > -1 && majorChecked(person) && groupChecked(person)) {
         $("#" + person.id).show();
     } else {
         $("#" + person.id).hide();
     }
  });

}
