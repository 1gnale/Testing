const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

const checkSeatStatus = (a, b) => {
  if (typeof a !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof b !== "number")
    throw new TypeError("Second parameter is not a number");
  if (b > 4) throw new TypeError("Please select a number between 1 and 4");
  const rowNumber = getRowNumber(a);
  const row = layout[rowNumber];
  return row[b - 1].booked;
};

const getRowNumber = (letter) => {
  const alphabet = ["a", "b", "c", "d", "e"];
  if (typeof letter !== "string") throw new TypeError("Letter is not a string");
  if (!alphabet.includes(letter.toLowerCase()))
    throw new TypeError("Please, put a valid character");
  return alphabet.indexOf(letter.toLocaleLowerCase());
};

const book = (a, b) => {
  const verifySeat = checkSeatStatus(a, b);
  if (verifySeat !== true) return `Seat in ${a + b} succesfully booked`;
  return `Seat in ${a + b} is already booked`;
};

const summary = (type) => {
  let value = 0;
  type === "ECONOMIC" ? (value = 300) : "";
  type === "NORMAL" ? (value = 450) : "";
  type === "VIP" ? (value = 600) : "";
  let total = 0;
  const totalHandler = (e) => {
    if (e.type === "VIP") total += 600;
    if (e.type === "NORMAL") total += 450;
    if (e.type === "ECONOMIC") total += 300;
  };
  if (type) {
    layout.forEach((row) =>
      row.forEach((e) => {
        e.type === type && e.booked === true ? (total += value) : "";
      })
    );
  } else {
    layout.forEach((row) =>
      row.forEach((e) => {
        e.booked === true ? totalHandler(e) : "";
      })
    );
  }
  return total;
};

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  summary,
};
