
import React from "react";

const DisplayScores = (props) => {
  const { current, max } = props
  return (
    <div className="score-wrapper">
      <div className="score" >Current score: {current}</div>
      <div className="score" >High score: {max}</div>
    </div>
  )
}

export default DisplayScores