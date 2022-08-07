
import React from "react";

const DisplayScores = (props) => {
  const { current } = props
  return (
    <div className="score-wrapper">
      <div className="score" >Current score: {current}</div>
    </div>
  )
}

export default DisplayScores