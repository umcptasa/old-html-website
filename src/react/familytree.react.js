"use strict";
import * as familyJSON from '../json/familytree.json';
import Tree from "react-d3-tree";

type Person = {
  name: String,
  children: Array<Person>
};

type Props = {
  data: Person
};

function FamilyTree(props: Props) {
  var { data } = props;
  return (
    <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
      <Tree data={data} />
    </div>
  );
}

{
  console.log(familyJSON);
  ReactDOM.render(
    React.createElement(FamilyTree, { familyJSON }),
    document.getElementById("family-tree-container")
  );
}
