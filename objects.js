// just making this comment to get app academy up my butt
// making me do shit every week tf
// this should be enough lol

//OOP
// a style of programing where we see a program as collection of objects that talk to each other to perform some functionality
//

// {
// key:pair
// } object literal
// group related variables. and functions that should operate on the keys /values

//draw method: is a function part of an object

// FACTORY FUNCTION
// function createCircle(radius) {
// 	// if key and value the same remove the value and just do the key.
// 	return {
// 		radius,

// 		draw() {
// 			console.log('draw');
// 		},
// 	};
// }

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
// const circle1 = createCircle(1);

// console.log(circle1);
// circle1.draw();

// const circle2 = createCircle(22);
// console.log(circle2);

// CONSTRUCTOR FUNCTIONS

// function Circle(radius) {
// 	this.radius = radius;
// 	this.draw = function () {
// 		console.log('draw');
// 	};
// }

// const circle = new Circle(1);

// DYNAMIC NATURE OF OBJECTS
// you can add new properties and methods or remove existing ones

// const circle = {
// 	radius: 1,
// };

// because we used const for the circle we cannot reassign the variable, or make circle a new object
// circle.color = 'yellow';
// circle.draw = function () {};

// delete circle.color;
// delete circle.draw;

// CONSTRUCTOR PROPERTY
// every object has this property
// the function to construct or create that object

// constructor Function
// function Circle(radius) {
// 	this.radius = radius;
// 	this.draw = function () {
// 		console.log('draw');
// 	};
// }

// let x = {};
// JS engine says: let x = new Object();
// ssame with new String(); but we use '', "". ``
// new Boolean(); but we use the literals of true, false
// same with new Number()

// FUNCTIONS ARE OBJECTS
//
// function Circle(radius) {
// 	this.radius = radius;
// 	this.draw = function () {
// 		console.log('draw');
// 	};
// }
// functions have function constructor
// const Circle1 = new Function(
// 	'radius',
// 	`
// 	this.radius = radius;
// 	this.draw = function () {
// 		console.log('draw');
// 	}`,
// );

// const circle = new Circle(1);
// const another = new Circle(1);

// Value/Primitive vs Reference Reference Types
// Primitive: Number, string, Boolean, Symbol, undefined, null
// references: Obhect, function Array

// Enumerating Proerties of an Object
// an object is not iterable

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// }

// for (let key in circle)
//     console.log(key, circle[key])

// // a normal for of loop wouldnt work
// for (let key of Object.keys(circle))
//     console.log(key);

// // Object.keys gives a array of strings of the keys of the object
// for (let key of Object.entries(circle))
//     console.log(key);
// entries reeturns each value pair as an array

// when we define an object using the object literal (ex: const x = {}) we are actually calling on the object function to create te new Object. so it would be like const x = new Object()

// Cloning Objects

const circle = {
	radius: 1,
	draw() {
		console.log('draw');
	},
};

// const another = {};

// for (let key in circle) another[key] = circle[key];
// this is like saying: another['radius'] = circle['radius']

// More modern way to clone:

const another = Object.assign({}, circle);
// this methods, takes the empty object/existing object,or a key value pair or with methods and copies the named object next to it thats cool