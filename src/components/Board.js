import React from "react";
import classes from "./Board.module.css";
const Board = ({ board }) => {
  console.log("board", board);

  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.row})`,
    gridTemplateColumns: `repeat(${board.size.columns})`,
  };
  return <div className={classes.Board} style={boardStyles}></div>;
};

export default Board;
