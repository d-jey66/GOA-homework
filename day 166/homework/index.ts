//HW 1
interface user {
  id: number;
  username: string;
  email: string;
  isAdmin?: boolean;
}

function User(): boolean | undefined {
  const user: user[] = [
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
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

// string
const stringArray: string[] = ["apple", "banana", "cherry"];
const firstString = getFirstItem<string>(stringArray);
console.log("First string:", firstString);

// number
const numberArray: number[] = [10, 20, 30];
const firstNumber = getFirstItem<number>(numberArray);
console.log("First number:", firstNumber);   

// object
type User = {
  id: number;
  name: string;
};

const userArray: User[] = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Gio" },
];

const firstUser = getFirstItem<User>(userArray);
console.log("First user:", firstUser);


//HW 3
type AResponse = {
  status: "success";
  data: {
    id: number;
    name: string;
  };
};

function getNameFromResponse(response: AResponse): string {
  return response.data.name;
}

const exampleResponse: AResponse = {
  status: "success",
  data: {
    id: 1,
    name: "Ana"
  }
};

const name1 = getNameFromResponse(exampleResponse);
console.log("Name from API:", name1); 


//HW 4
