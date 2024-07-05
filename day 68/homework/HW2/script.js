// 1
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));

// 2
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}

console.log(calculateSquareRoot(9));

// 3
function roundNumber(num) {
    return Math.round(num);
}

console.log(roundNumber(4.6));

// 4
function roundDownNumber(num) {
    return Math.floor(num);
}

console.log(roundDownNumber(4.6));

// 5
function roundUpNumber(num) {
    return Math.ceil(num);
}

console.log(roundUpNumber(4.1));

// 6
function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(2, 3));

// 7
function absoluteValue(num) {
    return Math.abs(num);
}

console.log(absoluteValue(-5));

// 8
function getLargestNumber(numbers) {
    return Math.max(...numbers);
}

console.log(getLargestNumber([1, 2, 3, 4, 5]));

// 9
function getRandomBoolean() {
    return Math.random() >= 0.5;
}

console.log(getRandomBoolean());

// 10
function getRandomRGBColor() {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(getRandomRGBColor());
