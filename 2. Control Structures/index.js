/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

if (randomNumber > 50) {
    console.log('more than fifty')
}
console.log(randomNumber)

// TODO 2.2 Display whether the random number is odd or even
// Your code here

if (randomNumber % 2 === 0) { 
    console.log("even brew")
}
else {
    console.log("Odd")
}


// TODO 2.3 If the number is a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 === 0) {
    console.log("fizz")
}
if (randomNumber % 5 === 0){
    console.log("buzz")
}

if (randomNumber % 5 === 0 && randomNumber % 3 === 0) {
    console.log("fizzbuzz")
}
let toDisplay = randomNumber


// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

toDisplay = randomNumber ? "Even" : "Odd"
console.log("toDisplay", toDisplay)

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: 

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here

for (let i = 0; i < n; i++) {
    
    console.log(i + 1)
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

let index = 0

while (index < list.length) {
    console.log(list[index])
    index++
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 

//The difference between while and do while loop is that in the while loop the condition is checked prior to executing any statements whereas in the case of do while loop, 
//statements are run at least once, and then the condition is verified.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

for (let element of list) {
    console.log(element)
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

for (let element in list) {
    console.log(list[element])
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here


list.forEach(function(value) {
  console.log(value)
})


// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 

//Use for of when you want to iterate over the values of an iterable object, like an array.

//Use for in when you want to iterate over the properties (keys) of an object.

//Use forEach when you are working with arrays and want a concise way to execute a function for each element in the array.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"

const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Cleaning up resources");
}




