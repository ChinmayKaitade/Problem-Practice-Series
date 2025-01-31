//? The Difference between let and const ?
// -> Let is used when we have to change the value of a variable declared.
// With const, we can't modify it once a variable is declared.
// Both Let and Const are introduced in ES6.

// A. Let
let number = 7;
number = 10; // 10
console.log(number); // 10

// B. Const
const value = 10;
value = 7;
console.log(value); // TypeError: Assignment to constant variable.
