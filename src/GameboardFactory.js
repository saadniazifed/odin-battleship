const Gameboard = () => {
  const gameBoardArray = [];
  const rows = 2;
  const columns = 2;
  for (let i = 0; i < rows; i++) {
    gameBoardArray[i] = [];
    for (let j = 0; j < columns; j++) {
      gameBoardArray[i][j] = null;
    }
  }
  return {
    gameBoardArray,
  };
};

export { Gameboard };
