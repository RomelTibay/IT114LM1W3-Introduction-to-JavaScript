/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

const squares = numbers.map(number => number ** 2)

console.log(`Numbers: ${numbers}`)
console.log(`Squares: ${squares}`)


// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

const evens = numbers.filter(number => number % 2 === 0);

console.log(`Numbers: ${numbers}`);
console.log(`Evens: ${evens}`);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

const total = numbers.reduce((acc, num) => acc + num, 0);

console.log(`Numbers: ${numbers}`);
console.log(`Total: ${total}`);


// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

const uppercasedWords = words.map(word => word.toUpperCase());

console.log(`Words: ${words}`);
console.log(`Uppercased Words: ${uppercasedWords}`);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

const longerWords = words.filter(word => word.length > 4);

console.log(`Words: ${words}`);
console.log(`Longer Words: ${longerWords}`);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

const concatenatedString = words.reduce((acc, word) => acc + word);

console.log(`Words: ${words}`);
console.log(`Concatenated String: ${concatenatedString}`);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 

//The map function applies a specified function to every element in the list, 
//the filter function selects elements based on a specified condition, 
//and the reduce function combines all elements into a single value using a specified function