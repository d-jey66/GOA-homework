function User() {
    var user = [
        {
            id: 1,
            username: "user1",
            email: "email",
            isAdmin: true,
        },
    ];
    return user[0].isAdmin;
}
console.log(User());
//HW 2
function getFirstItem(arr) {
    return arr[0];
}
// string
var stringArray = ["apple", "banana", "cherry"];
var firstString = getFirstItem(stringArray);
console.log("First string:", firstString);
// number
var numberArray = [10, 20, 30];
var firstNumber = getFirstItem(numberArray);
console.log("First number:", firstNumber);
var userArray = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Gio" },
];
var firstUser = getFirstItem(userArray);
console.log("First user:", firstUser);
function getNameFromResponse(response) {
    return response.data.name;
}
var exampleResponse = {
    status: "success",
    data: {
        id: 1,
        name: "Ana"
    }
};
var name1 = getNameFromResponse(exampleResponse);
console.log("Name from API:", name1);
