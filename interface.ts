export interface User {
    id: number;
    name: string;
    age?: number; // ? keyword adds the property as optional
    city: string;
}

//in interfaces, cant use the new keyword
let user: User = { id: 101, name: 'test', age: 20, city: 'Delhi' };

let user1: User = { id: 102, name: 'test1', city: 'Noida' };

console.log(user)
console.log(user1)

export interface Login {
    Login(): User;// interfaces can have only method declarations
}

//export is used to export the objects that are needed in other files
//in the other files, import is used

//object destructuring
let { id, name, age, city }: User = { id: 103, name: 'test123', age: 25, city: 'NY' };
let { id: userID, name: userName, age: userAge, city: userCity }: User = { id: 104, name: 'test12345', age: 26, city: 'NJ' };

console.log(id)
console.log(name)
console.log(age)
console.log(city)

console.log(userID)
console.log(userName)
console.log(userAge)
console.log(userCity)

//array destructuring
let [userA, userB, ...restUsers]: User[] = [
    { id: 103, name: 'test123', age: 25, city: 'NY' },
    { id: 104, name: 'test12345', age: 26, city: 'NJ' },
    { id: 105, name: 'test121', age: 27, city: 'Chicago' },
    { id: 106, name: 'Ray', age: 29, city: 'Chicago123' }
];

console.log(userA)
console.log(userB)
console.log(...restUsers)
console.log(restUsers)





