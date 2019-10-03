function makeTree(jsonPath) {
    $.getJSON(jsonPath, function(data) {
        const minZoom = 0.25;
        const maxZoom = 2;
        const zoomStep = 0.25;
        let zoomLevel = 0.75;

        const options = {
            data: data,
            element: document.getElementById("familytree"),
            orientation: "leftToRight",
            heightWithoutMargins: $(window).innerHeight() * 0.8,
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
                bodyBoxHeight: 100,
            }
        };

        const treePlugin = new d3.mitchTree.boxedTree(options).initialize();

        const zoomAndScale = zoomLevel => {
            treePlugin
                .getZoomListener()
                .scaleTo(treePlugin.getSvg(), zoomLevel);
            //treePlugin.getZoomListener().translateTo(treePlugin.getSvg(), treePlugin.getWidthWithoutMargins() * zoomLevel, treePlugin.getHeightWithoutMargins() * zoomLevel);
            $("#zoomValue").text(zoomLevel * 100 + "%");
        };

        zoomAndScale(zoomLevel);

        $("#searchButton").bind("click", () => {
            const value = document.getElementById("searchText").value.trim();
            const nodeMatchingText = treePlugin.getNodes().find(function(node) {
                return node.data.name.includes(value);
            });
            if (nodeMatchingText) treePlugin.focusToNode(nodeMatchingText);
            else if (value != null)
                treePlugin.focusToNode(value).replace(/ /g, "_");
        });

        $("#zoomInButton").bind("click", () => {
            if (zoomLevel == maxZoom) {
                return;
            }

            zoomLevel += zoomStep;
            zoomAndScale(zoomLevel);
        });

        $("#zoomOutButton").bind("click", () => {
            if (zoomLevel == minZoom) {
                return;
            }

            zoomLevel -= zoomStep;
            zoomAndScale(zoomLevel);
        });

        $("#focusToggle").bind("click", () => {
            treePlugin.setAllowFocus($("#focusToggle").is(":checked"));
        });
    });
}
