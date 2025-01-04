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
console.log('1' === 1); //false

// LOOSE equality ()
console.log(1 == 1);
console.log(1 == '1');
console.log(true == 1); //converts from left to right
// types dont need to match it just checks if values are equal

// Tenary Operator
// if a customer has more than 100 points they are a 'gold customer, otherwise, they are silver customer
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
// ? means then : means otherwise
console.log(type); //gold

// Logcal Operators

// use to make decisions based on many conditions
// Logical AND (&&)
// returns true if bother operands are true
console.log(true && true); //true
console.log(false && true); //false
console.log(false && false); //false

let highIncome = true;
let goodCredit = true;
let eligible = highIncome && goodCredit;
console.log(eligible); //true

//Logical OR (||);
// returns true if one of the operands is TRUE
console.log(true || true); //true
console.log(false || true); //true
console.log(false || false); //false

let highMoney = false;
let creditScore = true;
let eligibleLoan = highMoney || creditScore;
console.log(eligibleLoan); //true

//NOT (!)
let applicationRefused = !eligible; //false and application refused is false
//this converts eligible to the opposite of what it is. if its true it becomes false

// the result of a logical experission is not really true or false it depends on the value of the 'truthy' operand
// Falsy (false):
// undefiend
// null
// 0
// ''
// NaN

// Anthing that is not Falsy -> Truthy
// false || 1 || 2 as soon as an operant that is truthy is hit, it returns
// this is called short-curcuiting

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //red
// if userColor = undefined then the currentColor would be blue

// bitwise
// 1 = 00000001 <- 8 digits each is a bit so this is 8 bits that is 1 byte
//2 = 00000010
//3 = 00000011
//R = 00000000
console.log(1 | 2); // BitWise OR < it would be 3
console.log(1 & 2); // BitWise AND < it would be 0

//Read,Write,Execute
// we can use 1 byte of info to see what permission a user has
//00000100 <read permissions
//00000110 < read AND WRITE
//00000111 < read write AND execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); //6
let message = myPermission & readPermission ? 'yes' : 'no';

console.log('MESSAGE', message);

// Precedence of Operators
let xx = 2 + 3 * 4; // 3 * 4 + 2
// PEMDAS

// excirse- swapping variables
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a, b);

//	1 1 1 1 1 1 1
// 2 2 2 2 2 2 2
//3 3 3 3 3 3 3
//4 4 4 4 4 4 4
//5 5 5 5 5 5 5
// 6 6 6 6 6

//August 19,2024
//2
//3
//4
//5
//6
// August 25 2024
// 2
// 3
// 44
// 5
// 6
// September 3
// 1
// 2
// 3
// 4
// 5
//september 13
//1
//2
//3
//5
//1
//2
//3
//4
//5
// october 8
// 1
// 2
// 3
// 4
// ocriber 25
// 1
// 2
// 3
// 4
// 5
// 3
// 4
// 5
// nov 16
// 1
// 2
// 3
// 4
// 5
// november 29
// 2
//3
4;
let n = 4;

// december 6
//2
// 3
// 4
// 5

//december 14
// 2
//3
//4
//5

// december 21
// 2
// 3
// 4
// 5
// 6
// december 28
//  2
// 3
// 4
// 5
// janurary 4
// 2
// 3
// 4