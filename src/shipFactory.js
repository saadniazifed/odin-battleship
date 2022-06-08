function Ship(length) {
  //Keeping the actual array private
  const _shipArray = Array(length).fill(null);

  //Making a public method.
  const getShipArray = () => [..._shipArray];

  const hit = (position) => {
    _shipArray.splice(position, 1, "hit");
  };
  return {
    getShipArray,
    length,
    hit,
  };
}

export { Ship };
