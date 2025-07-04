const Add = require("./StringCalculator");

test("returns 0 for an empty string", () => {
  expect(Add("")).toBe(0);
});

test("returns the value itself if there is only 1 number in input", () => {
  expect(Add("1")).toBe(1);
});

test("returns sum of 2 numbers for 2 comma separated numbers in input", () => {
    expect(Add("1,2")).toBe(3);
    expect(Add("5,7")).toBe(12);
});
