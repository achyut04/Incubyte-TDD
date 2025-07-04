function Add(input) {
  if (input == "") return 0;

  let delimiter = /[\n,]/;
  let nums = input;

  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    delimiter = input.substring(2, delimiterEndIndex);
    nums = input.substring(delimiterEndIndex + 1);
  }

  let values = nums.split(delimiter).filter(v => v <= 1000).map(Number);
  const negatives = values.filter((v) => v < 0);

  if (negatives.length > 0)
    throw new Error(`Negatives not allowed: ${negatives.join(",")}`);


  const sum = values.reduce((total, val) => {
    return total + val;
  }, 0);

  return sum;
}

module.exports = Add;
