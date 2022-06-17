import { Ship } from "../shipFactory";

describe("First function to be tested", () => {
  test("Is Ship Returning Us Something", () => {
    expect(Ship()).toBeDefined();
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 2", () => {
    const myFirstShip = Ship(2);
    expect(myFirstShip.getShipArray()).toHaveLength(2);
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 3", () => {
    const myFirstShip = Ship(3);
    expect(myFirstShip.getShipArray()).toHaveLength(3);
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 4", () => {
    const myFirstShip = Ship(4);
    expect(myFirstShip.getShipArray()).toHaveLength(4);
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 5", () => {
    const myFirstShip = Ship(5);
    expect(myFirstShip.getShipArray()).toHaveLength(5);
  });
});

// describe("Testing the length of the Ship #2", () => {
//   test("Correct length of Ship #2", () => {
//     const mySecondShip = Ship(1);
//     expect(mySecondShip.length).toEqual(1);
//   });
// });

// describe("Testing the length of the Ship #3", () => {
//   test("Correct length of Ship #3", () => {
//     const myThirdShip = Ship(2);
//     expect(myThirdShip.length).toEqual(2);
//   });
// });

// describe("Checking to see if the hit function is working, and the length is decreased by 1", () => {
//   test("Checking to see if the length is decreased by 1 for the Ship", () => {
//     const myFirstShip = Ship(2, "Patroller");
//     expect(myFirstShip.hit()).toEqual([null]);
//     expect(myFirstShip.hit()).toEqual([]);
//   });
// });

// describe("Checking to see if the hit function is working, and the length is decreased by 1", () => {
//   test("Checking to see if the length is decreased by 1 for the Ship", () => {
//     const myFirstShip = Ship(4, "Destroyer");
//     expect(myFirstShip.hit()).toEqual([null, null, null]);
//     expect(myFirstShip.hit()).toEqual([null, null]);
//     expect(myFirstShip.hit()).toEqual([null]);
//     expect(myFirstShip.hit()).toEqual([]);
//   });
// });

// describe("Checking to see if the hit function is working, and the length is decreased by 1", () => {
//   test("Checking to see if the length is decreased by 1 for the Ship", () => {
//     const myFirstShip = Ship(5, "Water Carrier");
//     expect(myFirstShip.hit()).toEqual([null, null, null, null]);
//     expect(myFirstShip.hit()).toEqual([null, null, null]);
//     expect(myFirstShip.hit()).toEqual([null, null]);
//     expect(myFirstShip.hit()).toEqual([null]);
//     expect(myFirstShip.hit()).toEqual([]);
//   });
// });

// describe("Checking to see if the hit function is working, and the length is decreased by 1", () => {
//   test("Checking to see if the length is decreased by 1 for the Ship", () => {
//     const myFirstShip = Ship(3, "Submarine");
//     expect(myFirstShip.hit()).toEqual([null, null]);
//     expect(myFirstShip.hit()).toEqual([null]);
//     expect(myFirstShip.hit()).toEqual([]);
//   });
// });

// describe("Checking to see if the hit function is working, and the length is decreased by 1", () => {
//   test("Checking to see if the length is decreased by 1 for the Ship", () => {
//     const myFirstShip = Ship(4, "Battleship");
//     expect(myFirstShip.hit()).toEqual([null, null, null]);
//     expect(myFirstShip.hit()).toEqual([null, null]);
//     expect(myFirstShip.hit()).toEqual([null]);
//     expect(myFirstShip.hit()).toEqual([]);
//   });
// });

// describe("When the hit functions are called, length must be equal to zero and isSunk function returns true", () => {
//   test("Testing the isSunk function", () => {
//     const myFirstShip = Ship(5, "Water Carrier");
//     myFirstShip.hit(0);
//     myFirstShip.hit(1);
//     myFirstShip.hit(2);
//     myFirstShip.hit(3);
//     myFirstShip.hit(4);

//     expect(myFirstShip.getShipArray()).toEqual([]);
//     expect(myFirstShip.isSunk()).toBe(true);
//   });
// });

// describe("When the hit functions are called, length must be equal to zero and isSunk function returns true", () => {
//   test("Testing the isSunk function", () => {
//     const myFirstShip = Ship(4, "Destroyer");
//     myFirstShip.hit(0);
//     myFirstShip.hit(1);
//     myFirstShip.hit(2);
//     myFirstShip.hit(3);

//     expect(myFirstShip.getShipArray()).toEqual([]);
//     expect(myFirstShip.isSunk()).toBe(true);
//   });
// });

// describe("When the hit functions are called, length must be equal to zero and isSunk function returns true", () => {
//   test("Testing the isSunk function", () => {
//     const myFirstShip = Ship(4, "Battleship");
//     myFirstShip.hit(0);
//     myFirstShip.hit(1);
//     myFirstShip.hit(2);
//     myFirstShip.hit(3);

//     expect(myFirstShip.getShipArray()).toEqual([]);
//     expect(myFirstShip.isSunk()).toBe(true);
//   });
// });

// describe("When the hit functions are called, length must be equal to zero and isSunk function returns true", () => {
//   test("Testing the isSunk function", () => {
//     const myFirstShip = Ship(3, "Submarine");
//     myFirstShip.hit(0);
//     myFirstShip.hit(1);
//     myFirstShip.hit(2);

//     expect(myFirstShip.getShipArray()).toEqual([]);
//     expect(myFirstShip.isSunk()).toBe(true);
//   });
// });

// describe("When the hit functions are called, length must be equal to zero and isSunk function returns true", () => {
//   test("Testing the isSunk function", () => {
//     const myFirstShip = Ship(2, "Patroller");
//     myFirstShip.hit(0);
//     myFirstShip.hit(1);

//     expect(myFirstShip.getShipArray()).toEqual([]);
//     expect(myFirstShip.isSunk()).toBe(true);
//   });
// });
