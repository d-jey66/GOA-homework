function* generateRandomStrings(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    while (true) { 
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        yield result; 
    }
}

const randomStringGenerator = generateRandomStrings(10);

console.log(randomStringGenerator.next().value);
console.log(randomStringGenerator.next().value); 
console.log(randomStringGenerator.next().value); 
