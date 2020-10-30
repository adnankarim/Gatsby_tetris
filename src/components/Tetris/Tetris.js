import React from "react"
import styled from 'styled-components'
//import functions

// Import compoenents

import Stage from "../Stage/Stage.js"
import Display from "../Display/Display"
import StartButton from "../StartButton/StartButton"
import { createStage } from "../../helpers/gameHelpers"

// uimporting background image

import bgImage from '../../content/images/bg.png';
// writing styled comp.


const StyledTetrisWrapper = styled.div`
width:100vw;
height:100vh;
background:url(${bgImage}) #000;
background-size:cover;
overflow:hidden;
`;

const StyledTetris = styled.div`
display:flex;
align-items:flex-start;
padding: 40px;
margin:0 auto;
max-width:900px;

aside{
  width: 100%;
  max-width:200px;
  display:block;
  padding:0 20px;
}

`;
// component
const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="SCORE" />
            <Display text="ROWS" />
            <Display text="LEVEL" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
