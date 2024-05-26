// Code goes here!

const userName = "jaidev";

let age = 44;

const add = (a: number, b: number) => a + b;

console.log(add(2, 3));

const printOutput = (output: string | number) => {
  console.log(output);
};

printOutput(add(2, 3));

// array destructing
const hobbies = ["cricket", "football"];
// in case of array destructing values are pulled out in orders
const [hobby1, hobby2] = hobbies;

// object destructing
const person = { firstName: "Jaidev", lastName: "Bangar" };

// in case of object destructing values can be pulled out in any order as we are pulling out keys

const { firstName, lastName } = person;
