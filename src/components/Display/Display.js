import React from "react"
import styled from 'styled-components'

// /styled comp

const StyledDisplay = styled.div`
box-sizing: border-box;
display:flex;
margin:0 0 20px 0;
padding: 20px;
border:4px solid #333;
min-height:30px;
width:100%;
background:#000;
font-family: 'Press Start 2P', cursive;
font-size:0.8rem;
border-radius:20px;
color:${props => (props.gameOver ? 'red' : '#999')};

`;
const Display = ({ gameover, text }) => {
  return <StyledDisplay gameOver={gameover}>{text}</StyledDisplay>
}

export default Display
