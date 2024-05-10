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