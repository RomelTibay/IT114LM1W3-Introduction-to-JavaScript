/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

let numberOne = numbers[0]
let numberFive = numbers[4]
let numberSix = numbers[5]
console.log(numberOne, numberFive, numberSix);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

let min = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min){
        min = numbers[i]
    }
}

let max = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
    }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;

console.log("Minimum:", min);
console.log("Maximum:", max);
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 

//Both array and lists are used for storing the data:
//The purpose of both the collection is to store the data. 
//While the list is used to store homogeneous as well as non-homogeneous data, an array can store only homogeneous data.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

let it114lCourse = {
    courseCode: "IT114L",
    courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
    units: 1,
    numberOfStudents: 40
};

console.log(it114lCourse);


// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

it114lCourse.profName = "Job Lipat";
console.log(it114lCourse.profName);


// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

let myCourses = [
    {courseCode: "IT114L", courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)", units: 1, numberOfStudents: 40},
    {courseCode: "CS102", courseName: "DATA STRUCTURES AND ALGORITHMS ANALYSIS", units: 2, numberOfStudents: 40},
    {courseCode: "IT132L", courseName: "LOGIC DESIGN AND SWITCHING (LABORATORY)", units: 2, numberOfStudents: 40},
    {courseCode: "IT132", courseName: "LOGIC DESIGN AND SWITCHING THEORY", units: 2, numberOfStudents: 40},
    {courseCode: "IT133", courseName: "TECHNOPRENEURSHIP", units: 3, numberOfStudents: 40},
    {courseCode: "IT114", courseName: "WEB SYSTEMS AND TECHNOLOGIES", units: 2, numberOfStudents: 40},
    {courseCode: "HUM039", courseName: "ETHICS", units: 3, numberOfStudents: 40},
    {courseCode: "PE044", courseName: "PATHFIT 4", units: 2, numberOfStudents: 40},
    {courseCode: "VE022", courseName: "VALUES EDUCATION 2", units: 1, numberOfStudents: 40},
]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

let totalUnits = 0
for (let i = 0; i < myCourses.length; i++) {
    totalUnits += myCourses[i].units
}

console.log("Total Units:", totalUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

let newArray = [...numbers, 99]

console.log("OldArray:", numbers)
console.log("NewArray:", newArray)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here


let { courseCode, units } = it114lCourse;

console.log("Course Code:", courseCode);
console.log("Units:", units);