
# 🧮 String Calculator (TDD Kata)

This project implements a **String Calculator** in JavaScript using the **Test-Driven Development (TDD)** approach.

The goal is to progressively build functionality by writing **one failing test at a time**, implementing just enough code to pass it, and **refactoring** if necessary.

---

## 🚀 Features Implemented

1. Returns `0` for an empty string.
2. Returns the number itself for a single number input.
3. Adds two comma-separated numbers.
4. Handles an unknown amount of comma-separated numbers.
5. Handles newline characters (`\n`) as delimiters.
6. Supports custom delimiters (e.g., `//;\n1;2`).
7. Throws an exception for negative numbers with all negatives listed.
8. Ignores numbers greater than `1000`.
9. Supports delimiters of any length (e.g., `//[***]\n1***2***3`).
10. Supports multiple delimiters (e.g., `//[*][%]\n1*2%3`).
11. Supports multiple delimiters of any length (e.g., `//[***][##][@@]\n1***2##3@@4`).

---

## 🧪 Test Cases

```js
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
});

test("returns the sum of numbers separated by newlines", () => {
  expect(Add("1\n2")).toBe(3);
  expect(Add("1\n11\n21")).toBe(33);
});

test("returns the sum of numbers delimited by custom delimiter", () => {
  expect(Add("//;\n1;2;3")).toBe(6);
  expect(Add("//.\n1.5.7")).toBe(13);
});

test("throws exception when negative numbers are used", () => {
  expect(() => Add("1,-2,6,-8")).toThrow("Negatives not allowed: -2,-8");
});

test("returns the sum of numbers that are less than or equal to 1000", () => {
  expect(Add("2,1001")).toBe(2);
  expect(Add("//#\n55#5555")).toBe(55);
});

test("returns the sum of numbers separated by delimiters of any type", () => {
  expect(Add("//[***]\n1***2***3")).toBe(6);
});

test("returns the sum with multiple custom delimiters", () => {
  expect(Add("//[*][%]\n1*2%3")).toBe(6);
});

test("returns the sum with multiple delimiters of any length", () => {
  expect(Add("//[***][##][@@]\n1***2##3@@4")).toBe(10);
});
```

---

## 🖼️ Screenshots


### Test Results
![Test Results](/screenshots/test-results.png?raw=true "Optional Title")


## 🛠️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/achyut04/Incubyte-TDD.git
   cd Incubyte-TDD
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests using Jest:

   ```bash
   npm test
   ```

---

## 🧑‍💻 Technologies Used

- JavaScript
- Jest

---

## ✅ TDD Cycle Followed

This project followed the classic **Red → Green → Refactor** cycle:

1. Write a failing test
2. Write the minimal code to make the test pass
3. Refactor while keeping tests green

---

## 📁 Project Structure

```
.
├── StringCalculator.js      # Calculator implementation
├── StringCalculator.test.js # Jest unit tests
├── README.md                # Project documentation
├── package.json            
├── package-lock.json
└── /screenshots             
```



