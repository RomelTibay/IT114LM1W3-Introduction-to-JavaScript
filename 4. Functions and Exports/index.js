/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet('romel');

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 

//A function declaration is a statement that defines a named function and is hoisted to the top of its scope, allowing it to be called anywhere in the code. On the other hand, a function expression defines a function as part of an expression, typically by assigning it to a variable, and is not hoisted, meaning it must be declared before it is called in the code.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

const calculateArea = function(length, width) {
    return length * width;
  };
  const length = 5;
  const width = 10;
  const area = calculateArea(length, width);
  
  console.log(`The area is: ${area}`);
  
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 

//A callback function is a function which is to be executed after another function has finished execution.

function processArray(numbers, callback) {
    const result = numbers.map(function (num) {
      return num * num;
    });
    callback(result);
  }
  function logResult(resultArray) {
    console.log("Processed array:", resultArray);
  }
  const myNumbers = [1, 2, 3, 4, 5];
  processArray(myNumbers, logResult);
  
// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(array, modificationFunction) {
    const modifiedArray = [];
  
    for (let i = 0; i < array.length; i++) {
      modifiedArray.push(modificationFunction(array[i]));
    }
    return modifiedArray;
  }
  const numbers = [1, 2, 3, 4, 5];
  
  function incrementByOne(number) {
    return number + 1;
  }
  const modifiedNumbers = modifyArray(numbers, incrementByOne);
  
  console.log("Original array:", numbers);
  console.log("Modified array (incremented by 1):", modifiedNumbers);
  

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
