/*
* Map containing all of the people
* Use http://fperucic.github.io/treant-js/
*/
var FAMILY_TREE = new Map();
var FOUNDERS = [];

$(document).ready(function() {
    Tabletop.init({
        key: '1q0ctDiufN-Fzg59HC5EZ5pWbVyiondZOxyG2ij3Es2g',
        callback: function(data, tabletop) {
            data.forEach(addPerson);
            updateChildren("Founder");

            /*
            FAMILY_TREE.get("Founder").children.forEach(function(lineFounder) {
                createTab(lineFounder.text.name);
            });
            */
            
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
                    console.log("Tree for Founder loaded");
            }, $);

        },
        simpleSheet: true
    });

});

function addPerson(person) {
	var big, littles, parentNode;
    big = person.Big;
    littles = person.Littles.split(",");

    //console.log(big + " found in " + FAMILY_TREE.has(big));
	if(FAMILY_TREE.has(big)) {
        //console.log("Found: " + big);
		parentNode = FAMILY_TREE.get(big);
	} else {
        //console.log(big);
        if(big.charAt(0) == '(') {
            parentNode = new Node(big, "inactive");
        } else {
            parentNode = new Node(big, "active");
        }
		parentNode = new Node(big);
		FAMILY_TREE.set(big, parentNode);
	}

	/* Children is an array of Strings */
	littles.forEach(function(c) {
        //console.log("Little for " + big + " is " + c.trim());
        var childName = c.trim(), child;
        if(childName.charAt(0) == '(') {
            child = new Node(childName, "inactive");
        } else {
            child = new Node(childName, "active");
        }

        FAMILY_TREE.set(childName, child);

        parentNode.children.push(child);
		//parentNode.addChild(child);
	});
}

function Node(name, htmlClass) {
	this.text = {name: name };
	this.children = [];
	this.HTMLid = name;
    this.HTMLclass = htmlClass;
    //this.parent = parent;
}

function updateChildren(name) {
    var children, length = 0;;
    if(FAMILY_TREE.has(name)) {
        children = FAMILY_TREE.get(name).children;
        length = children.length;
    } else {
        return;
    }

    for(i = 0; i < length; i++) {
        var child = children[i];
        var name = child.text.name;

        updateChildren(i);
        children[i] = FAMILY_TREE.get(name);
    }
}

function createTab(lineFounder) {
    console.log("HERE " + lineFounder);
    $('#tabs').append("<button class='tablinks' onclick='renderTree(event, " + lineFounder + ")'>" + lineFounder + "</button>");
    $('#families').append("<div class='tabContent chart' val='hi' id='" + lineFounder + "'></div>");
    createTree(lineFounder);
}

function createTree(lineFounder) {
    console.log($('#' + lineFounder).val());
    var config = {
        chart: {
    		container: "#" + lineFounder,
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
        console.log("Tree for " + lineFounder + " loaded");
    }, $);
}

function renderTree(event, lineFounder) {
    $(".tabContent").hide();
    $(".tablinks").removeClass("active");
    $("#" + lineFounder).show();
    event.currentTarget.className += "active";
}
