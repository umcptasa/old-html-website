function makeTree(jsonPath) {
    $.getJSON(jsonPath, function(data) {
    const minZoom = 0.5;
    const maxZoom = 2;

    const options = {
        data: data,
        element: document.getElementById("familytree"),
        orientation: "leftToRight",
        heightWithoutMargins: window.innerHeight * 0.80,
        allowZoom: true,
        allowFocus: $("#focusToggle").is(":checked"),
        minScale: minZoom,
        maxScale: maxZoom,
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
        nodeSettings: {
            sizingMode: "nodeSize",
            horizontalSpacing: "50",
        },
        
    };

    const treePlugin = new d3.mitchTree.boxedTree(options).initialize();

    $("#searchButton").bind("click", () => {
        const value = document.getElementById("searchText").value.trim();
        const nodeMatchingText = treePlugin.getNodes().find(function(node) {
            return node.data.name.includes(value);
        });
        if (nodeMatchingText) treePlugin.focusToNode(nodeMatchingText);
        else if (value != null)
            treePlugin.focusToNode(value).replace(/ /g, "_");
    });

    let zoomLevel = 1;

    $("#zoomInButton").bind("click", () => {
        if (zoomLevel == maxZoom) {
            return;
        }

        zoomLevel += 0.25;
        treePlugin.getZoomListener().scaleTo(treePlugin.getSvg(), zoomLevel);
        $("#zoomValue").text(zoomLevel * 100 + "%");
    });

    $("#zoomOutButton").bind("click", () => {
        if (zoomLevel == minZoom) {
            return;
        }

        zoomLevel -= 0.25;
        treePlugin.getZoomListener().scaleTo(treePlugin.getSvg(), zoomLevel);
        $("#zoomValue").text(zoomLevel * 100 + "%");
    });

    $("#focusToggle").bind("click", () => {
        treePlugin.setAllowFocus($("#focusToggle").is(":checked"));
    })
});

}
