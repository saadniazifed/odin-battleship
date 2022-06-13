function Ship(length, name) {
  const shipName = name;
  const _shipArray = Array(length).fill(null);
  const getShipArray = () => [..._shipArray];

  const hit = (position) => {
    if (position >= _shipArray.length) {
      return;
    }
    return (_shipArray[position] = "hit");
  };

  const isSunk = () => {
    if (_shipArray.every((element) => element !== null)) {
      return true;
    }
    return false;
  };
  return {
    shipName,
    getShipArray,
    length,
    hit,
    isSunk,
  };
}

export { Ship };
