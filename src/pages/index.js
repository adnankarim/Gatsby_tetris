import React, { Fragment } from 'react';
import GlobalStyle from "../utils/styles/global"
import Tetris from "../components/Tetris/Tetris.js"

export default function Home() {
  return (<Fragment>
    <GlobalStyle />
    <Tetris className="Home">Hello world!</Tetris>
  </Fragment>);
}
