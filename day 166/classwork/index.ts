//first part
let fullName: string = "Dachi Jananashvili";
let age: number = 14;
let student: boolean = true;

console.log(age);
console.log(fullName);
console.log(student);


//second part
const arr: string[] = ["vashli", "alucha", "kiwii"];
const SN: (string | number)[] = ["Dachi", 14];

type Persons1 = {
    name: string;
    age: number;
    isMarried: boolean;
}

interface Persons2 {
    name: string;
    age: number;
    isMarried: boolean;
}

const person1: Persons1[] = [
    {
        name: "Nika",
        age: 15,
        isMarried: false
    },
    {
        name: "zura",
        age: 40,
        isMarried: true
    },
]

const person2: Persons2[] = [
    {
        name: "giorgi",
        age: 22,
        isMarried: false
    },
    {
        name: "mariami",
        age: 14,
        isMarried: false
    },
]
console.log(arr);
console.log(SN);
console.log(person1);
console.log(person2);

//third part
function add(a: number, b: number): number[] {
    const result = [a, b];
    return result;
}
