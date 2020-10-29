import React from "react"
import Cell from "../Cell/Cell"
const Stage = ({ stage }) => {
  return (
    <div>
      {stage.map(row => row.map((el, i) => <Cell key={i} type={el[0]} />))}
    </div>
  )
}

export default Stage
