import { useBaord } from "../Hooks/useBaord";
import Board from "./Board";
import classes from "./Tetris.module.css";

const Tetris = ({ rows, columns, setGameOver }) => {
  const { board, setBoard } = useBaord({ rows, columns });
  return <Board board={board} />;
};

export default Tetris;
