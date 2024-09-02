// 1. Person ობიექტის შექმნა
let person = {
    name: "Giorgi",
    surname: "Bakhtadze",
    age: 30
};

// 2. ახალი ობიექტის დამატება და თვისებების განახლება
let additionalInfo = {
    address: "Tbilisi",
    country: "Georgia"
};

Object.assign(person, additionalInfo);

// 3. ობიექტის დესტრუქტურიზაცია
let { name, surname, address } = person;

console.log(name);
console.log(surname);
console.log(address); 

// 4. მასივის შექმნა და დესტრუქტურიზაცია
let numbers = [5, 15, 25, 35];

let [firstNum, secondNum, thirdNum] = numbers;

console.log(firstNum);  
console.log(secondNum); 
console.log(thirdNum); 
