const { checkSeatStatus, getRowNumber, book, summary } = require("../testingTest");

describe("checkSeatStatus", () => {
  it("checkSeatStatus is a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });

  it("should throw a TypeError if first parameter is not a string", () => {
    expect(() => checkSeatStatus(4)).toThrow(
      new TypeError("First parameter is not a string")
    );
  });

  it("should throw a TypeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("A", "String")).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });

  it("should return true if the given seat defined by row and column is booked", () => {
    expect(checkSeatStatus("A", 2)).toBe(true);
  });

  it("should return false if the given seat defined by row and column is not booked", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });

  it("should throw an error if number > 4", () => {
    expect(() =>checkSeatStatus("e", 5)).toThrow(
      new TypeError("Please select a number between 1 and 4")
    )
  })
});

describe("getRowNumber", () => {
  it("getRowNumber is a function", () => {
    expect(typeof getRowNumber).toBe("function");
  });

  it("should return a 0 if letter is A", () => {
    expect(getRowNumber("A")).toBe(0);
  });

  it("should return a 2 if letter is c", () => {
    expect(getRowNumber("C")).toBe(2);
  });

  it("should return a 3 if letter is d", () => {
    expect(getRowNumber("d")).toBe(3);
  });

  it("should throw an error if parameter is not a string", () => {
    expect(() => getRowNumber(1)).toThrow(
      new TypeError("Letter is not a string")
    );
  });

  it("should throw an error if there is no letter", () => {
    expect(() => getRowNumber("Aguacate Marrón")).toThrow(
      new TypeError("Please, put a valid character")
    );
  });
});

describe("book", () => {
  it("book is a function", () => {
    expect(typeof book).toBe("function");
  });

  it("if the seat is not booked then book it", () => {
    expect(book("A", 1)).toBe("Seat in A1 succesfully booked");
  });

  it("if the seat is booked then return it is already booked", () => {
    expect(book("A", 2)).toBe("Seat in A2 is already booked");
  });
});

describe("summary", () => {
  it("summary is a function", () =>{
    expect(typeof summary).toBe("function")
  })

  it("should return all VIPs seats collects", () =>{
    expect(summary("VIP")).toBe(1800)
  })

  it("should return all NORMALs seats collects", () =>{
    expect(summary("NORMAL")).toBe(1800)
  })

  it("should return all ECONOMICs seats collects", () =>{
    expect(summary("ECONOMIC")).toBe(600)
  })

  it("should return all types seats collects", () =>{
    expect(summary()).toBe(4200)
  })
})