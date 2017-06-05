var ALL_GROUPS = new Map();
var ALL_PEOPLE = new Array();
$(document).ready(function() {
    /*
    var allPeople = [
        new Person("Stephan", "Computer Science", "Sophomore",
            "North Potomac, MD", "Prince Frederick", "ACES, UMSO", "Physical Touch, Quality Time")

    ];

    fillTable(allPeople);
    //fillTableFromSheet();
    */
});

function Person(name, major, year, hometown, dorm, studentGroups, loveLanguages) {
    this.name = name;
    this.major = major;
    this.year = year;
    this.hometown = hometown;
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
    var person = new Person(row[0], row[1], row[2], row[3], row[4], row[5], row[6]);
    ALL_PEOPLE.push(person);
}

// function fillTableFromSheet() {
//     var spreadsheet = "https://docs.google.com/spreadsheets/d/1EqqgCV03NuBFQnEJTJ2iLpu5UjxG0ZIsRb8X9b20kqc/edit?usp=sharing#gid=0";
//     var entryTemplate = Handlebars.compile($("#entryTemplate").html());
//     $("#searchTable").sheetrock({
//         url: spreadsheet,
//         query: "SELECT A, B, C, D, E ORDER BY A ASC",
//         fetchSize: 5,
//         rowTemplate:
//     });
// }


function fillTable() {
    ALL_PEOPLE.forEach(createEntry);
}

function createEntry(person) {
    var entryTemplate = Handlebars.compile($("#entryTemplate").html());

    var personHTML = entryTemplate(person);
    $("#searchTable").append(personHTML);

    $("#" + person.name).click(function() {
        $("#" + person.name + "overview").show(function() {
            document.body.addEventListener('click', closeOverview, false);
        });
    });

}

function closeOverview(e) {
    if(e.target.class != "overview") {
        document.body.removeEventListener('click', closeOverview, false);
        $('.overview').hide();
    }
}


function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("searchTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
