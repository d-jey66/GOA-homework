const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

// 1. map
const upperCaseArr = arr.map(item => item.toUpperCase());
console.log('Map:', upperCaseArr);

// 2. filter
const longWords = arr.filter(item => item.length > 5);
console.log('Filter:', longWords);

// 3. find
const foundItem = arr.find(item => item.startsWith('c'));
console.log('Find:', foundItem);

// 4. findIndex
const foundIndex = arr.findIndex(item => item.startsWith('d'));
console.log('FindIndex:', foundIndex);

// 5. join
const joinedString = arr.join(', ');
console.log('Join:', joinedString);

// 6. indexOf
const figIndex = arr.indexOf('fig');
console.log('IndexOf:', figIndex);

// 7. startsWith
const startsWithB = arr[1].startsWith('b');
console.log('StartsWith:', startsWithB);

// 8. endsWith
const endsWithE = arr[6].endsWith('e');
console.log('EndsWith:', endsWithE);

// 9. includes
const includesApple = arr.includes('apple');
console.log('Includes:', includesApple);
