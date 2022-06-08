function Ship(length) {
  //Keeping the actual array private
  const _shipArray = Array(length).fill(null);

  //Making a public method.
  const getShipArray = () => [..._shipArray];

  const hit = (position) => {
    if (position >= _shipArray.length) {
      return;
    }
    _shipArray[position] = "hit";
  };

  const isSunk = (shipSunk) => {
    if (shipSunk == true) {
      hit();
      return true;
    } else if (shipSunk == false) {
      return false;
    }
  };
  return {
    getShipArray,
    length,
    hit,
    isSunk,
  };
}

export { Ship };
