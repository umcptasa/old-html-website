/*
* Map containing all of the people
* Use http://fperucic.github.io/treant-js/
*/
var FAMILY_TREE = new Map();

$(document).ready(function() {
    Tabletop.init({
        key: '1q0ctDiufN-Fzg59HC5EZ5pWbVyiondZOxyG2ij3Es2g',
        callback: function(data, tabletop) {
            data.forEach(addPerson);
            renderTree();

        },
        simpleSheet: true
    });
});

function addPerson(person) {
	var big, littles, parentNode;
    big = person.Big;
    littles = person.Littles.split(",");

    console.log(big + " found in " + FAMILY_TREE.has(big));
	if(FAMILY_TREE.has(big)) {
        //console.log("Found: " + big);
		parentNode = FAMILY_TREE.get(big);
	} else {
        //console.log(big);
		parentNode = new Node(big);
		FAMILY_TREE.set(big, parentNode);
	}

	/* Children is an array of Strings */
	littles.forEach(function(c) {
        console.log("Little for " + big + " is " + c.trim());
		var child  = new Node(c.trim());
        FAMILY_TREE.set(c.trim(), child);

        parentNode.children.push(child);
		//parentNode.addChild(child);
	});
}

function Node(name) {
	this.text = {name: name };
	this.children = [];
	this.HTMLid = name;
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

function renderTree() {
    updateChildren("Founder");
    var familyTreeConfig = {
    	chart: {
    		container: "#familyTree",
    		animateOnInit: true,
            scrollbar:"fancy",
            siblingSeparation: 10,
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
            console.log("tree loaded");
    }, $);

}
