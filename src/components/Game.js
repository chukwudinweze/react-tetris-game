import React from "react";
import useGameOver from "../Hooks/useGameOver";
import Menu from "./Menu";
import classes from "./Menu.module.css";
import Tetris from "./Tetris";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const start = () => {
    resetGameOver();
    console.log(`start gameOver is ${gameOver}`);
  };
  return (
    <div className={classes.Game}>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
