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
function createCircle(radius) {
	// if key and value the same remove the value and just do the key.
	return {
		radius,

		draw() {
			console.log('draw');
		},
	};
}

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
const circle1 = createCircle(1);

console.log(circle1);
circle1.draw();

const circle2 = createCircle(22);
console.log(circle2);

// CONSTRUCTOR FUNCTIONS

function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log('draw');
	};
}

const circle = new Circle(1);
