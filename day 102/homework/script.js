// 1
function* infiniteNumbers() {
    let num = 0;
    while (true) {
        yield num++;
    }
}

// 2
function* evenNumbers() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}

// 3
function* randomNumbers() {
    while (true) {
        yield Math.random();
    }
}

// 4
function* letterGenerator(word) {
    for (let letter of word) {
        yield letter;
    }
}

// 5
function* randomPasswordGenerator() {
    const digits = Array.from({ length: 10 }, (_, i) => i.toString());
    while (true) {
        let password = '';
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            password += digits[randomIndex];
        }
        yield password;
    }
}

//6
function* enhancedPasswordGenerator() {
    const characters = [
        ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)),
        ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
        ...Array.from({ length: 10 }, (_, i) => i.toString()), 
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
        ...Array.from('abcdefghijklmnopqrstuvwxyz'),
    ];
    while (true) {
        let password = '';
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        yield password;
    }
}