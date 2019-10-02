import React from "react"
import PropTypes from "prop-types"

const TreeNodeLabelPositions = (props) => {
    const {positions} = props;
    console.log(positions);
    return (
        <div className={"positions"}>
            {positions.map((pos) => (
                <div>
                {pos}
                </div>
            ))}
        </div>
    );
}

TreeNodeLabelPositions.propTypes = {
    positions: PropTypes.arrayOf(PropTypes.string),
}

export default TreeNodeLabelPositions
