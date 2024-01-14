/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var x;
x = 5

console.log(x)


// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let mySpeech
mySpeech = "Hello"
console.log(mySpeech)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const myConstant = 5;
//myConstant = 10;
console.log("myConstant value is " + myConstant);


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

//var: The older method of declaring JavaScript variables, allowing for redeclaration and updates at any point. Prone to hoisting, which might lead to unexpected behavior.
//let: A more modern variable declaration with block scoping. It can be updated within its scope but cannot be redeclared. Requires declaration before use, and hoisting may cause a reference error if not declared first.
//const: Similar to let but with the added restriction that the assigned value cannot be updated or re-declared after initialization. Also block-scoped and subject to hoisting.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

var x;
x = 5
var y;
y = 6

var z;
z = x + y;

var q = 10
var r = 5

var u = q / r

console.log(z)
console.log(u)

// Checkpoint 1.2 What operators did you use?
// Answer: I used the + and / operators
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

let firstName = "Romel"
let lastName = "Tibay"
let fullName = firstName +" "+ lastName

console.log(fullName)

let mundo = "world";
let hi = `Hello ${mundo}`

console.log(hi)

// Checkpoint 1.3 What operators did you use?
// Answer: string interpolation and string concatenation

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

let result1 = true && false; 
let result2 = true || false; 
let result3 = !true; 
let xorResult = (true || false) && !(true && false); 
console.log(result1, result2, result3, xorResult)

// Checkpoint 1.4 What operators did you use?
// Answer: 

//and, or, not and xor


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

let resultOne = 5 == "5"; 
let resultTwo = 5 === "5";
let resultThree = 5 != "5";
let resultFour = 10 > 5;
let resultFive = 5 < 10;
let resultSix = 10 >= 10;
let resultSeven = 5 <= 10;
console.log(resultOne, resultTwo, resultThree, resultFour, resultFive, resultSix, resultSeven)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 

// It evaluate to true. Based on my research, In JavaScript, when you compare false and an empty box ([]), the computer tries to make them similar to see if they are equal. 
// The empty box turns into an empty string, and then both the empty box and false become the number zero. 
// So, 0 is the same as 0, and the comparison ends up being true.

// Your code here