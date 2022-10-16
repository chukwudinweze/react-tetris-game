import React, { useState } from "react";
import { buildBoard } from "../Business/Board";

export const useBaord = ({ rows, columns }) => {
  const [board] = useState(buildBoard({ rows, columns }));
  return [board];
};
