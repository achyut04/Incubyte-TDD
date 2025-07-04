const Add = require("./StringCalculator");

test("returns 0 for an empty string", () => {
  expect(Add("")).toBe(0);
});

test("returns the value itself if there is only 1 number in input", () => {
  expect(Add("1")).toBe(1);
});
