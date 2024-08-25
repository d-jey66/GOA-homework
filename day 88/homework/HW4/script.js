const printElements = () => {
    const array = [1, 2, 3, 4, 5];
    const obj = { a: 'apple', b: 'banana', c: 'cherry' };

    console.log('Array elements:');
    for (const item of array) {
        console.log(item);
    }

    console.log('Object properties:');
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
};

printElements();
