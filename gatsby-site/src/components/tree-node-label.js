import React from "react"
import TreeNodeLabelPositions from "../components/tree-node-label-positions"
import { isNull } from "util";

const TreeNodeLabel = props => {
  const { className, nodeData } = props
  const graduated = isNull(nodeData.attributes) ? null:  nodeData.attributes.graduated;
  const positions = isNull(nodeData.attributes) ? null:  nodeData.attributes.positions;
  return (
    <div className={className}>
      <div className={"nodeNameBase"}>{nodeData.name}</div>

      {graduated && <div className={"graduation"}>Graduated: {graduated}</div>}
      {positions && <TreeNodeLabelPositions positions={positions} />}

    </div>
  )
}

export default TreeNodeLabel
