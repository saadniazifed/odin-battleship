function Ship(length, name) {
  const shipName = name;
  const _shipArray = Array(length).fill(null);
  const getShipArray = () => [..._shipArray];

  const hit = () => {
    _shipArray.splice(0, 1);
    return _shipArray;
  };

  const isSunk = () => {
    if (_shipArray.length === 0) {
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
