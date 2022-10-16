import React from "react";
import classes from "./Menu.module.css";

const Menu = ({ onClick }) => {
  return (
    <div className={classes.Menu}>
      <button className={classes.Button} onClick={onClick}>
        Play tetris
      </button>
    </div>
  );
};

export default Menu;
