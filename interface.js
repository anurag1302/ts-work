"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//in interfaces, cant use the new keyword
let user = { id: 101, name: 'test', age: 20, city: 'Delhi' };
let user1 = { id: 102, name: 'test1', city: 'Noida' };
console.log(user);
console.log(user1);
//export is used to export the objects that are needed in other files
//in the other files, import is used
