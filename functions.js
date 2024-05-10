"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const subtract = (num1, num2) => num1 - num2;
const multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(add(4, 3));
console.log(subtract(4, 3));
console.log(multiply(4, 3));
//Optional Params
function add1(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
//Required Params/Default Params
const subtract1 = (num1, num2, num3 = 10) => num1 - num2 - num3;
//Rest params
const multiply1 = function (num1, num2, num3) {
    return num1 * num2 * num3.reduce((a, b) => a * b);
};
const multiply2 = function (num1, num2, ...num3) {
    return num1 * num2 * num3.reduce((a, b) => a * b, 1);
};
console.log(add1(4, 3, 5));
console.log(subtract1(4, 3, 9));
console.log(multiply1(4, 3, [1, 2, 3]));
console.log(multiply2(4, 3, ...[1, 2, 3]));
console.log(multiply2(4, 3, 1, 2, 3));
