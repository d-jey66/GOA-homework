const arr = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// 1. map
const mapResult = arr.map(item => item + '!');
console.log('Map:', mapResult); 

// 2. filter
const filterResult = arr.filter(item => item.includes('a'));
console.log('Filter:', filterResult);

// 3. find
const findResult = arr.find(item => item.startsWith('g'));
console.log('Find:', findResult); 

// 4. findIndex
const findIndexResult = arr.findIndex(item => item.endsWith('e'));
console.log('Find Index:', findIndexResult); 

// 5. join
const joinResult = arr.join(', ');
console.log('Join:', joinResult); 

// 6. indexOf
const indexOfResult = arr.indexOf('orange');
console.log('Index Of:', indexOfResult);

// 7. includes
const includesResult = arr.includes('banana');
console.log('Includes:', includesResult); 

// 8. startsWith
const startsWithResult = arr.map(item => item.startsWith('k'));
console.log('Starts With:', startsWithResult); 

// 9. endsWith
const endsWithResult = arr.map(item => item.endsWith('a'));
console.log('Ends With:', endsWithResult); 
