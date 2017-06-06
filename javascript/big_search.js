var ALL_GROUPS = new Map();
var ALL_PEOPLE = new Array();
$(document).ready(function() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1EqqgCV03NuBFQnEJTJ2iLpu5UjxG0ZIsRb8X9b20kqc/pubhtml',
        callback: function(data, tabletop) {
            data.forEach(addPerson);
            fillTable();

        },
        simpleSheet: true
    });
    /*
    var allPeople = [
        new Person("Stephan", "Computer Science", "Sophomore",
            "North Potomac, MD", "Prince Frederick", "ACES, UMSO", "Physical Touch, Quality Time")

    ];

    fillTable(allPeople);
    //fillTableFromSheet() ;
    */
});

function Person(name, major, year, dorm, studentGroups, loveLanguages) {
    this.name = name;
    this.major = major;
    this.year = year;
    this.dorm = dorm;
    this.studentGroupsText = studentGroups
    this.studentGroups = parseStudentGroups(studentGroups);
    this.loveLanguagesText = loveLanguages;
    this.loveLanguages = loveLanguages.split(",");
}

function parseStudentGroups(studentGroups) {
     var arrayGroups = studentGroups.split(",");

     arrayGroups.forEach(function(group) {
        var key = group.toUpperCase();
        if(ALL_GROUPS.has(key)) {
            ALL_GROUPS.set(key, ALL_GROUPS.get(key) + 1);
        } else {
            ALL_GROUPS.set(key, 1);
        }
     });

     return arrayGroups;
}

function addPerson(row) {
    var person = new Person(row.Name, row.Major, row.Year, row.Dorm, row.Groups, row.LoveLanguage);
    ALL_PEOPLE.push(person);
}


function fillTable() {
    ALL_PEOPLE.forEach(createEntry);
}

function createEntry(person) {
    var entryTemplate = Handlebars.compile($("#entryTemplate").html());

    var personHTML = entryTemplate(person);
    $("#searchTable").append(personHTML);

    /*
    $("#searchTable").on("click", "#" + person.name, function() {
        $("searchTable").on("click", "#" + person.name + "overview").show(function() {
            document.body.addEventListener('click', closeOverview, false);
        });
    });
    */
}

function showOverview(id) {
    console.log(id);
    $(id).show(function() {
        document.body.addEventListener('click', closeOverview, false);
    })
}

function closeOverview(e) {
    if(e.target.class != "overview") {
        document.body.removeEventListener('click', closeOverview, false);
        $('.overview').hide();
    }
}


function filter() {
  // Declare variables
  var input, arrayLength;
  input = $("#searchInput").val().toUpperCase();

  ALL_PEOPLE.forEach(function(person) {
     if(person.name.toUpperCase().indexOf(input) > -1) {
         $("#" + person.name).css("display", "table-row");
     } else {
         $("#" + person.name).css("display", "none");
     }
  });

}
