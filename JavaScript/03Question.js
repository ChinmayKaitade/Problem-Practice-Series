// What is Variable Scoping?

// In JavaScript, a variable's scope refers to the parts of the program where it can be accessed and used. There are two types of scope in JavaScript:

// Global scope: Variables declared outside of any function are in the global scope and can be accessed from anywhere in the program.

// Local scope: Variables declared within a function are in the local scope and can only be accessed within that function.

// It's important to understand the concept of scope in JavaScript as it helps to avoid naming collisions and ensure that variables are properly isolated. The "var" keyword is function scoped, while "let" and "const" are block scoped.

// Global scope
var globalVariable = "I'm a global variable";

function exampleFunction() {
  // Local scope
  var localVariable = "I'm a local variable";

  console.log(globalVariable); // "I'm a global variable"
  console.log(localVariable); // "I'm a local variable"
}

exampleFunction();

console.log(localVariable); // ReferenceError: localVariable is not defined
