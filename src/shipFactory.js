function Ship(length) {
  //Keeping the actual array private
  const _shipArray = Array(length).fill(null);

  //Making a public method.
  const getShipArray = () => [..._shipArray];

  const hit = (position) => {
    if (position >= _shipArray.length) {
      return;
    } else {
      _shipArray[position] = "hit";
    }
  };
  return {
    getShipArray,
    length,
    hit,
  };
}

export { Ship };
