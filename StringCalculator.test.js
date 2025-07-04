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

test("returns the sum of all the numbers in input", () => {
    expect(Add("1,2,3")).toBe(6);
    expect(Add("5,7,12")).toBe(24);
})

test("returns the sum of numbers seperated by newlines", () => {
    expect(Add("1\n2")).toBe(3);
    expect(Add("1\n11\n21")).toBe(33);
});


test("returns the sum of numbers delimited by custom delimiter", () => {
    expect(Add("//;\n1;2;3")).toBe(6);
    expect(Add("//.\n1.5.7")).toBe(13);
});