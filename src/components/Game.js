import React from "react";
import Menu from "./Menu";

const Game = ({ rows, columns }) => {
  const start = () => console.log("start");
  return (
    <div>
      <Menu onClick={start} />
      rows {rows}, colums {columns}
    </div>
  );
};

export default Game;
