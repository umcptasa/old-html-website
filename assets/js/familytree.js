console.log("got here");
$.getJSON("https://api.myjson.com/bins/1bjyd5", function(data) {
    console.log("hello");
    const options = {
        data: data,
        element: document.getElementById("visualisation"),
        getId: function(data) {
            return data.attributes.id;
        },
        getChildren: function(data) {
            return data.children;
        },
        getBodyDisplayText: function(data) {
            return data.attributes.description;
        },
        getTitleDisplayText: function(data) {
            return data.name;
        },
        orientation: "topToBottom"
    };

    var treePlugin = new d3.mitchTree.boxedTree(options).initialize();

    document
        .getElementById("focusButton")
        .addEventListener("click", function() {
            var value = document.getElementById("focusText").value;
            var nodeMatchingText = treePlugin.getNodes().find(function(node) {
                return node.data.name == value;
            });
            if (nodeMatchingText) treePlugin.focusToNode(nodeMatchingText);
            else if (value != null) treePlugin.focusToNode(value);
        });
});
