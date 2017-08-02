/*
* Map containing all of the people
* Use http://fperucic.github.io/treant-js/
*/
var FAMILY_TREE = new Map();
var VISIBLE = "Founder";

/*
* Called once all of the scripts are done loading
* Initializes Tabletop.js which pulls data from the Google Sheet
* Then for each row, create a person via addPerson
* Once that is done, go through the map once more and update the references to children
* Then for each of the Founder node's children, create an HTML tab and tree for it
* Create the family tree via Treant js for the founder node
* Hide all of the trees just created, and show only the Founder node
*/
$(document).ready(function() {
    Tabletop.init({
        key: '1q0ctDiufN-Fzg59HC5EZ5pWbVyiondZOxyG2ij3Es2g',
        callback: function(data, tabletop) {
            data.forEach(addPerson);
            updateChildren("Founder");

            FAMILY_TREE.get("Founder").children.forEach(function(lineFounder) {
                let name = lineFounder.text.name;
                createTab(name, name.replace(" ", ""));
            });


            var familyTreeConfig = {
            	chart: {
            		container: "#Founder",
            		animateOnInit: true,
                    scrollbar:"fancy",
                    siblingSeparation: 10,
                    hideRootNode: true,
            		node: {
            			collapsable: true
            		},
            		animation: {
            			nodeAnimation: "easeOutBounce",
            			nodeSpeed: 700,
            			connectorsAnimation: "bounce",
            			connectorSpeed: 700
            		}
            	},

            	nodeStructure: FAMILY_TREE.get("Founder")
            };

            var tree = new Treant(familyTreeConfig, function() {
                    //console.log("Tree for Founder loaded");
            }, $);
            $(".tabcontent").hide();
            $("#Founder").show();
        },
        simpleSheet: true
    });

    $(window).resize(function() {
      if( $(this).width() >= 740 && $("#navbar-content").attr("aria-expanded") == "true" ) {
        $("#navbar-toggle").click();
        $("#tabs-toggle").click();
      }


      adjustFooterDivFloat($(this).width());
      adjustFooterCopyright($(this).width());
      adjustOuterContainerWidth($(this).width());
      adjustEventListElementOrientation($(this).width());
      adjustEventDetailsOrientation($(this).width());
      adjustFormWidth($(this).width());
      adjustBoardOrientation($(this).width());
      changeBoardLabelText($(this).width());
    });
});

/*
* Adds a person to the Map
* Row gotten from Tabletop js consists of Big column and Littles column
* If the FAMILY_TREE map already has the big, then get that node
* Otherwise, create one and put it into the map with name as the key
*
* For each of the children, trim the name so remove any spaces
* If the child has ( as first character, represents person is inactive
* Add the node to the map
* Add this new node to the big's children array
*/
function addPerson(person) {
	var big, littles, parentNode;
    big = person.Big;
    littles = person.Littles.split(",");

	if(FAMILY_TREE.has(big)) {
		parentNode = FAMILY_TREE.get(big);
	} else {
        if(big.charAt(0) == '(') {
            parentNode = new Node(big, "inactive");
        } else {
            parentNode = new Node(big, "active");
        }
		FAMILY_TREE.set(big, parentNode);
	}

	/* Children is an array of Strings */
	littles.forEach(function(c) {
        var childName = c.trim(), child;
        if(childName.charAt(0) == '(') {
            child = new Node(childName, "inactive");
        } else {
            child = new Node(childName, "active");
        }

        FAMILY_TREE.set(childName, child);

        parentNode.children.push(child);
	});
}

/*
* Basic data structure stored in the Map and used for the tree
*/
function Node(name, htmlClass) {
	this.text = {name: name};
	this.children = [];
	this.HTMLid = name.replace(" ", "_");
    this.HTMLclass = htmlClass;
    //this.parent = parent;
}

/*
* Recursively goes through the current node's children and updates references to them
*/
function updateChildren(name) {
    var children, length = 0;;
    if(FAMILY_TREE.has(name)) {
        children = FAMILY_TREE.get(name).children;
        length = children.length;
    } else {
        return;
    }

    for(i = 0; i < length; i++) {
        let child = children[i];
        let name = child.text.name;

        updateChildren(i);
        children[i] = FAMILY_TREE.get(name);
    }
}

/*
* Creates a tab in the HTML
* <button class='tablinks' onclick='renderTree(event, "lineFounderNoSpace")'>lineFounder</button>
* <div class='tabcontent chart' id='lineFounderNoSpace'></div>
* Then once the HTML is set, creates a tree linking to it
*/
function createTab(lineFounder, lineFounderNoSpace) {
    $('#allTabs').append("<button class='tablinks' onclick='renderTree(event, \"" + lineFounderNoSpace + "\")'>" + lineFounder + "</button>");
    $('#families').append("<div class='tabcontent chart' id='" + lineFounderNoSpace + "'></div>");

    createTree(lineFounder, lineFounderNoSpace);
}

/*
* Creates a Treant.js tree
*/
function createTree(lineFounder, lineFounderNoSpace) {
    var selector = "#" + lineFounderNoSpace;
    var config = {
        chart: {
    		container: selector,
    		animateOnInit: true,
            scrollbar:"fancy",
            siblingSeparation: 10,
            hideRootNode: false,
    		node: {
    			collapsable: true
    		},
    		animation: {
    			nodeAnimation: "easeOutBounce",
    			nodeSpeed: 700,
    			connectorsAnimation: "bounce",
    			connectorSpeed: 700
    		}
    	},

    	nodeStructure: FAMILY_TREE.get(lineFounder)
    };
    var tree = new Treant(config, function(){
        //console.log("Tree for " + lineFounder + " loaded");
    }, $);
}

/*
* Functionality for clicking on the tab
* hides the currently visible family tree and shows the new one
*/
function renderTree(event, lineFounderNoSpace) {
    $("#" + VISIBLE).hide();
    //$(".tablinks").removeClass("active");
    //event.currentTarget.className += "active";
    VISIBLE = lineFounderNoSpace;
    $("#" + lineFounderNoSpace).show();
}
