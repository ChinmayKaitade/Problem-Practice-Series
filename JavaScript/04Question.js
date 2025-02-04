// How var is different than let and const?

// var

// var is used since JS started.

// var can be used inside the whole function

// var is hoisted.

// let & const

// let & const were introduced into ES6

// let & const can be ONLY used inside a scope they’re in.

// No hoisting

// In simple words -

// var has a functional scope which means we can declare var at one point and use it at another point INSIDE THAT FUNCTION. let & const are block-scoped means they are ONLY accessible inside curly braces( {} )

// var is hoisted so even if try to get the value before the var variable is declared it’ll give undefined but will give an error for the same case in of let and const.

// A. Hoisting
console.log(number); // undefined
console.log(anotherNumber); // ReferenceError: Cannot access 'anotherNumber' before initialization
console.log(anotherAnotherNumber); // ReferenceError: Cannot access 'anotherNumber' before initialization

var number = 5;
let anotherNumber = 5;
const anotherAnotherNumber = 5;

// TIP - As var is hoisted that's why number is undefined, anotherNumber & anotherAnotherNumber are giving an error.

// B. Functional scope & Block Scope
function sayMyName(characterName) {
  var profession = "Drug Dealer";

  if (characterName) {
    let age = 50;
    console.log(profession); // Drug Dealer
    console.log(age); // 50
  }

  console.log(age); // ReferenceError: age is not defined
  console.log(noOfChildren); // ReferenceError: noOfChildren is not defined
}

sayMyName("Walter White");

// Tip - profession variable is declared outside "if" scope but still in the same function using var so it'll give the data.
// But age is only declared inside if block using let that's why we can't access it. same thing for const as well.
