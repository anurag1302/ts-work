let firstName: string = 'test';

console.log(firstName.toLocaleUpperCase());

let age: number = 0;

console.log(age);

let isValid: boolean = false;
console.log(isValid);

let strList: string[];
strList = ["A", "B", "C"];

console.log(strList)

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

console.log(numList);

let filteredList = numList.filter((num) => num > 2);
console.log(filteredList)

let sum = numList.reduce((x, y) => x + y);
console.log(sum);

enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Blue;

console.log(myColor);

let myTuple: [name: string, age: number];
myTuple = ['test', 10];

console.log(myTuple[0]);
console.log(myTuple[1])

let numTuple: [num1: number, num2: number];

function swap(num1 : number, num2: number): [number, number] {
    return [num2, num1];
}

numTuple = swap(10,20);

console.log(numTuple);

let dept:any; // do not use any
dept='IT';
dept=10;

console.log(dept);