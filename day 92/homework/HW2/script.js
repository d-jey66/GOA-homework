function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}

const numList = [5, 12, 8, 20, 15, 3];
console.log(filterGreaterThanTen(numList));
