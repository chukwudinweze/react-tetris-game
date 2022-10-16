import React, { useCallback, useState } from "react";

const useGameOver = () => {
  const [gameover, setGameover] = useState(true);

  const resetGameOver = useCallback(() => {
    setGameover(false);
  }, []);
  return [gameover, setGameover, resetGameOver];
};

export default useGameOver;
