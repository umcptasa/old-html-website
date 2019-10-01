"use strict";

var familyJSON = _interopRequireWildcard(require("../json/familytree.json"));

var _reactD3Tree = _interopRequireDefault(require("react-d3-tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FamilyTree(props) {
  var data = props.data;
  return React.createElement("div", {
    id: "treeWrapper",
    style: {
      width: "50em",
      height: "20em"
    }
  }, React.createElement(_reactD3Tree["default"], {
    data: data
  }));
}

{
  console.log(familyJSON);
  ReactDOM.render(React.createElement(FamilyTree, {
    familyJSON: familyJSON
  }), document.getElementById("family-tree-container"));
}