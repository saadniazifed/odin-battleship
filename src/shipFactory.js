function Ship(length) {
  //Keeping the actual array private
  const _shipArray = Array(length).fill(null);

  //Making a public method.
  const getShipArray = () => [..._shipArray];
  return {
    getShipArray,
    length,
  };
}

export { Ship };
