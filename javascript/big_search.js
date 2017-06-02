$(document).ready(function() {
    var allPeople = [
        new Person("Stephan", "Computer Science", "Sophomore",
            "North Potomac, MD", "Prince Frederick", ["ACES", "UMSO"], ["Physical Touch", "Quality Time"])

    ];

    //fillTable(allPeople);
    fillTableFromSheet();
});

function Person(name, major, year, hometown, dorm, studentGroups, loveLanguages) {
    this.name = name;
    this.major = major;
    this.year = year;
    this.hometown = hometown;
    this.dorm = dorm;
    this.studentGroups = studentGroups;
    this.loveLanguages = loveLanguages;
}

function fillTableFromSheet() {
    var spreadsheet = "https://docs.google.com/spreadsheets/d/1EqqgCV03NuBFQnEJTJ2iLpu5UjxG0ZIsRb8X9b20kqc/edit?usp=sharing#gid=0";
    $("#searchTable").sheetrock({
        url: spreadsheet,
        query: "SELECT A, B, C, D, E ORDER BY A ASC",
        fetchSize: 5
    });
}


function fillTable(allPeople) {
    allPeople.forEach(createEntry);
}

function createEntry(person) {
    /*
    <div class='entry' id='PERSON_NAME'>
        <tr>
            <td>PERSON_NAME</td>
            <td>PERSON_MAJOR</td>
            <td>PERSON_YEAR</td>
        </tr>
        <div class='overview' id='PERSON_NAMEover'>
            <h3> Hometown: PERSON_HOMETOWN
                 Dorm: PERSON_DORM
            </h3>
        </div>
    </div>
    */
    /*
    $("#searchTable").append("<div class='entry' id='" + person.name +
        "'><tr><td>" + person.name +
        "</td><td>" + person.major +
        "</td><td>" + person.year +
        "</td></tr> <div class='overview' id='" + person.name +
        "over'><h3>Hometown: " +
        person.hometown + "<br>Dorm: " + person.dorm + "</h3></div></div>");
        */

    $("#searchTable").append("<tr id='" + person.name + "'><td>" + person.name +
        "</td><td>" + person.major +
        "</td><td>" + person.year +
        "</td></tr><tr class='overview' id='" + person.name +
        "over'><h3>Hometown: " +
        person.hometown + "<br>Dorm: " + person.dorm + "</h3></tr>");

    $("#" + person.name).click(function() {
        $("#Stephanover").show(function() {
            alert("CLICKWEE");
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
