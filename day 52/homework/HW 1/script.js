function infoJoin(name, lastName, age, location, hobby) {
    var sentence = "My name is " + name + " " + lastName + ", I am " + age + " years old, living in " + location + " and my hobby is " + hobby + ".";
    return sentence;
}

var myInfo = infoJoin("Dachi", "Jananashvili", 13, "Tbilisi", "coding");
console.log(myInfo);
