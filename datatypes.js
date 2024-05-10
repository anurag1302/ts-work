"use strict";
let firstName = 'test';
console.log(firstName.toLocaleUpperCase());
let age = 0;
console.log(age);
let isValid = false;
console.log(isValid);
let strList;
strList = ["A", "B", "C"];
console.log(strList);
let numList;
numList = [1, 2, 3, 4, 5];
console.log(numList);
let filteredList = numList.filter((num) => num > 2);
console.log(filteredList);
let sum = numList.reduce((x, y) => x + y);
console.log(sum);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(myColor);
let myTuple;
myTuple = ['test', 10];
console.log(myTuple[0]);
console.log(myTuple[1]);
let numTuple;
function swap(num1, num2) {
    return [num2, num1];
}
numTuple = swap(10, 20);
console.log(numTuple);
let dept; // do not use any
dept = 'IT';
dept = 10;
console.log(dept);
