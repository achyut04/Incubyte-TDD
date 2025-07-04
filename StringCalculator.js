function Add(input) {
  if (input == "") return 0;
  let delimiter = /[\n,]/;
  let nums = input;
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    delimiter = input.substring(2, delimiterEndIndex);
    nums = input.substring(delimiterEndIndex + 1);
  }
  let values = nums.split(delimiter);
  const sum = values.reduce((total, val) => {
    return total + parseInt(val);
  }, 0);

  if (values.length === 0) return parseInt(nums);

  return sum;
}

module.exports = Add;
