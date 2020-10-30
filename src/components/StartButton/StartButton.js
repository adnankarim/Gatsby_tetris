import React from "react"
import styled from 'styled-components'

// styled comp

const StyledButton = styled.div`
box-sizing:border-box;
margin: 0 0 20px 0;
padding:20px;
min-height:30px;
width:100%;
border-radius:20px;
border:none;
color:white;
background:#333;
font-size:1rem;
font-family: 'Press Start 2P', cursive,Arial;
outline:none;
cursor:pointer;


`;
const StartButton = ({ callback }) => {
  return <StyledButton onclick={callback}>START GAME</StyledButton>
}

export default StartButton
