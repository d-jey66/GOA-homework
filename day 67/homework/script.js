// 1 
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960
};

// 2
book.genre = "Fiction";

// 3
delete book.publishedYear;

// 4
console.log(book.title);

// 5
console.log("author" in book);

// 6
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// 7
let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

// 8
let objectLength = Object.keys(book).length;

// 9
let nestedObject = {
    outer: {
        inner: {
            value: 42
        }
    }
};
console.log(nestedObject.outer.inner.value);

// 10
let bookValues = Object.values(book);

// 11
let numbers = Array.from({ length: 10 }, (_, index) => index + 1);

// 12
numbers.push(11);

// 13
numbers.unshift(0);

// 14
numbers.pop();

// 15
numbers.shift();

// 16
let arrayLength = numbers.length;

// 17
let thirdElement = numbers[2];

// 18
numbers.forEach(element => {
    console.log(element);
});

// 19
let doubledArray = numbers.map(element => element * 2);

// 20
let reversedArray = numbers.reverse();
