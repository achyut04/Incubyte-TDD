function Add(numbers){
    if(numbers == "")
        return 0;
    let values = numbers.split(/[\n,]/);
    const sum = values.reduce((total, val) => {
        return total + parseInt(val);
    }, 0);

    if(values.length === 0) return parseInt(numbers);

    return sum;
}

module.exports = Add;