// console.log('Hello World')

const interestRate = 0.3;

// Primitives/Value Types
// string
let name = 'Mosh'; // string literal
// number
let age = 30; // number literal
// boolean
let isApproved = true || false; //boolean literal
// undefined ( a type and value)
let firstName = undefined; //undefined
// null is an object
let selectedColor = null; //to clear the value of a variable

// DYNAMIC
// static languages is set and cannot be changed in future
// js can change variable at run time.

// in javascript we dont have two kinds of numbers, we dont have floating point numbers
// REFERENCE TYPES

// objects
// representation of something.
let person = {
	//keys are properties
	name: 'Mosh',
	age: 30,
	// these are key value pair
}; //curly brackets are object literal
//to change we can do Dot Notation
person.name = 'John';
// we can also log a property with dot notation
console.log(person.name);

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';
// these two lines are the same
person['name'] = 'Mary';

// ARRAYS
// its a list
let selectedColors = ['red', 'blue']; //<- an array literal
selectedColors[2] = 'green';
console.log(selectedColors);
// selectedColors[0] <= is first element
// you can store different types in an array
// array is an object, so it has properties you can get from dot notation
console.log(selectedColors.length);
//arrays are data structures we use to represent a list of items

// Functions
// a set of statement that performs a tast or calculates a value
// name is a parameter. a variable only meaningful in the function. wont be accessible outside the function
function greet(name, lastName) {
	console.log('Hello ' + name + ' ' + lastName);
}

greet('Mosh');
// Mosh is the argument of the greet function. Its the actual value for the parameter.
// default value of variables are undefined

greet('Mary', 'Bob');

// Another function example
// calculates a value

function square(number) {
	return number * number;
}

console.log(square(2));
// console log is also a function call hahaha

// Javascript OPERATORS
// use operators to create experssions that become algorithyms

// types of operators:
// Arithmetic
let x = 10;
let y = 3;

// console.log(x + y); //this is an experssion, expresions produce a value
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y); //x to the power of y

// Increment (++)
// console.log(++x);
// if you have the ++ before, it will show 11 on the console
console.log(x++);
// if you do so after the variable it will still show original value
// Decrement(--)
// so applying -- or ++ first will show the changes first

// Assignment

// = is the assignment operator
x++; //increment by one
// its the same as this:
x = x + 1;
// what if you want to increment 5?
x += 5;
x = x * 3; //or
x *= 3;
// you can do this with all the other arithmetic operators

// comparison

// relational operators
let w = 1;
console.log(w > 0); //true < a boolean
console.log(w >= 1); //also true
console.log(w < 1); //false
console.log(w <= 1); //true

// STRICT equality (same Type + Value)
console.log(w === 1); //is equal to
console.log(w !== 1); //is NOT equal to
console.log(1 === 1); //true
console.log('1' == 1); //false

// LOOSE equality ()
console.log(1 == 1);
console.log(1 == '1');

// logical
// bitwise
