// What is Hoisting?
// It’s the behavior of JS to move all the variable, object & functional declarations to the top of the file.

// How Hoisting Works?
console.log(number); // undefined
var number = 5;
// Above line JS engines takes as
var numbers = undefined;
console.log(number); // Till this point number is by default(Due to hoisting) has undefined value.
number = 5; // 5

// ---------------------- //

// Hoisting is applicable in var only in let it will throw error directly (ReferenceError: Cannot access 'number' before initialization)

console.log(number); // ReferenceError: Cannot access 'number' before initialization
let number = 5;
// Above line JS engines takes as
let numbers = undefined;
console.log(number); // Till this point number is by default(Due to hoisting) has undefined value.
number = 5; 
