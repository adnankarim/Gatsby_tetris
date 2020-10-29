import React from "react"
//import functions

// Import compoenents

import Stage from "../Stage/Stage.js"
import Display from "../Display/Display"
import StartButton from "../StartButton/StartButton"
import { createStage } from "../../helpers/gameHelpers"

// writing comp.
const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  )
}

export default Tetris
