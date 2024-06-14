//Conditional statements

// 1
function checkNumber(num) {
    if (num > 0) {
        console.log('Positive');
    } else if (num < 0) {
        console.log('Negative');
    } else {
        console.log('Zero');
    }
}

// 2
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

// 3
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('Leap Year');
    } else {
        console.log('Not a Leap Year');
    }
}

// 4
function maxOfTwo(a, b) {
    return a > b ? a : b;
}

// 5
function minOfThree(a, b, c) {
    return Math.min(a, b, c);
}

// 6
function isEmptyString(str) {
    return str.length === 0;
}

// 7
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 8
function getLetterGrade(grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// 9
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 10
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}



//objects

// 1
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// 2
console.log("Name:", person.name);
console.log("Age:", person.age);

// 3
person.email = "john@example.com";

// 4
let car = {
    make: "Toyota",
    model: "Corolla",
    owner: {
        name: "Jane",
        age: 28
    }
};

// 5
console.log("Owner's Name:", car.owner.name);
console.log("Owner's Age:", car.owner.age);

// 6
car.model = "Camry";

// 7
car.calculateAge = function(manufactureYear) {
    let currentYear = new Date().getFullYear();
    return currentYear - manufactureYear;
};

// 8
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}


//while loops

// 1
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 3
let n = 5; 
let factorial = 1;
let k = n;
while (k > 1) {
    factorial *= k;
    k--;
}
console.log("Factorial of", n, "is", factorial);

// 4
let limit = 10; 
let a = 0, b = 1;
let fibonacci = [];
while (a <= limit) {
    fibonacci.push(a);
    let temp = a + b;
    a = b;
    b = temp;
}
console.log("Fibonacci sequence up to", limit, "is", fibonacci.join(", "));

// 5
let num = 123; 
let reversedNum = 0;
while (num > 0) {
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10);
}
console.log("Reversed number is", reversedNum);

// 6
let number = 789; 
let largestDigit = 0;
while (number > 0) {
    let digit = number % 10;
    if (digit > largestDigit) {
        largestDigit = digit;
    }
    number = Math.floor(number / 10);
}
console.log("Largest digit is", largestDigit);

// 7
let palindromeNum = 12321; 
let tempNum = palindromeNum;
let reversedPalindromeNum = 0;
while (tempNum > 0) {
    reversedPalindromeNum = reversedPalindromeNum * 10 + tempNum % 10;
    tempNum = Math.floor(tempNum / 10);
}
let isPalindrome = palindromeNum === reversedPalindromeNum;
console.log(palindromeNum, "is a palindrome?", isPalindrome);

// 8
let sumNum = 1234; 
let sum = 0;
while (sumNum > 0) {
    sum += sumNum % 10;
    sumNum = Math.floor(sumNum / 10);
}
console.log("Sum of digits is", sum);

// 9
let primeNum = 17; 
let isPrime = true;
let l = 2;
while (l <= Math.sqrt(primeNum)) {
    if (primeNum % l === 0) {
        isPrime = false;
        break;
    }
    l++;
}
console.log(primeNum, "is a prime number?", isPrime);

// 10
let str = "hello"; 
let reversedStr = "";
let m = str.length - 1;
while (m >= 0) {
    reversedStr += str[m];
    m--;
}
console.log("Reversed string is", reversedStr);


// for loops

// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 3
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100 is", sum);

// 4
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}

// 5
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 6
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log("Factorial of 5 is", factorial);

// 7
let numbers = [1, 2, 3, 4, 5];
let sumArray = 0;
for (let i = 0; i < numbers.length; i++) {
    sumArray += numbers[i];
}
console.log("Sum of numbers in the array is", sumArray);

// 8
let numbersArray = [10, 5, 8, 20, 2];
let largestNumber = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > largestNumber) {
        largestNumber = numbersArray[i];
    }
}
console.log("Largest number in the array is", largestNumber);

// 9
let str = "Hello World";
let vowelsCount = 0;
for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/i.test(str[i])) {
        vowelsCount++;
    }
}
console.log("Number of vowels in the string is", vowelsCount);

// 10
let numbersAvg = [10, 20, 30, 40, 50];
let sumAvg = 0;
for (let i = 0; i < numbersAvg.length; i++) {
    sumAvg += numbersAvg[i];
}
let average = sumAvg / numbersAvg.length;
console.log("Average of numbers in the array is", average);


// functions

// 1
function addNumbers(a, b) {
    return a + b;
}

// 2
function multiplyNumbers(a, b) {
    return a * b;
}

// 3
function calculateRectangleArea(width, height) {
    return width * height;
}

// 4
function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// 5
function isEven(num) {
    return num % 2 === 0;
}

// 6
function findMax(a, b) {
    return a > b ? a : b;
}

// 7
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 8
function generateNumbersArray(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

// 9
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// 10
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
