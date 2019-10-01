"use strict";

import * as familyJSON from '../json/familytree.json';
import Tree from "react-d3-tree";

function FamilyTree(props) {
  var {
    data
  } = props;
  return React.createElement("div", {
    id: "treeWrapper",
    style: {
      width: "50em",
      height: "20em"
    }
  }, React.createElement(Tree, {
    data: data
  }));
}

{
  console.log(familyJSON);
  ReactDOM.render(React.createElement(FamilyTree, {
    familyJSON
  }), document.getElementById("family-tree-container"));
}