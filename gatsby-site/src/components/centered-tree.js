import React, { useState, useEffect, useRef } from "react"
import PropTypes, { node } from "prop-types"
import Tree from "react-d3-tree"
import TreeNodeLabel from "../components/tree-node-label"

import "../css/familytree.css"

const nodeWidth = 125
const nodeHeight = 100

const nodeSvgShape = {
  shape: "rect",
  shapeProps: {
    width: nodeWidth,
    height: nodeHeight,
    x: -nodeWidth / 2,
    y: -nodeHeight / 2,
  },
}

const CenteredTree = props => {
  const {data} = props
  const container = useRef(null)
  const [translate, setTranslate] = useState({
    translate: {
      x: 0,
      y: 0,
    },
  })

  useEffect(() => {
    const dimensions = container.current.getBoundingClientRect()
    setTranslate({
      x: dimensions.width / 2,
      y: nodeHeight,
    })
  }, [container])

  return (
    <div className="familytree gradient" ref={container}>
      <Tree
        data={data}
        allowForeignObjects
        nodeLabelComponent={{
            render: <TreeNodeLabel className=""/>,
            foreignObjectWrapper: {
                x: -nodeWidth / 2,
                y: -nodeHeight / 3,
            },
        }}
        translate={translate}
        collapsible={true}
        orientation={"vertical"}
        initialDepth={1}
        pathFunc={"elbow"}
        transitionDuration={250}
        nodeSvgShape={nodeSvgShape}
      />
    </div>
  )
}

CenteredTree.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CenteredTree
