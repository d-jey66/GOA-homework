// 1
const person = new Map();
person.set('name', 'ნიკა');      
person.set('surname', 'გიორგაძე'); 
person.set('age', 25);            

console.log(person);

// 2
const arrayWithDuplicates = ['apple', 'banana', 'apple', 'orange', 'banana', 'kiwi'];
const uniqueElements = new Set(arrayWithDuplicates); 

console.log(Array.from(uniqueElements)); 
