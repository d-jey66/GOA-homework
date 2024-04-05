let N1 = {
    name: "Davit",
    surname: "Ivanshvili",
    age: 32
};

let N2 = {
    name: "Davit",
    surname: "Ivanshvili",
    age: 32
};

let Equal = true;

if (N1.name !== N2.name || N1.surname !== N2.surname || N1.age !== N2.age) {
    Equal = false;
}

if (Equal) {
    console.log("Objects are equal");
} else {
    console.log("Objects are not equal");
}
