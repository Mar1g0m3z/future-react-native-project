// Conditional Statements
// if...else

// Hour
// if hour is between 6 am and 12pm: good morning!
// if hour between 12pm and 6pmL good afternoon!
// otherwise: good evening!

// Block of code
// if (condition) {
//     statement
// }
// else if(anothercondition){
// statement
// }
// else {statement}

// let hour = 10;

// if (hour >= 6 && hour < 12) {
// 	console.log('Good morning');
// } else if (hour >= 12 && hour < 18) {
// 	console.log('Good Afternoon');
// } else {
// 	console.log('Good Evening');
// }

// // Switch...Case
// let role = 'guest';
// switch (role) {
// 	case 'guest':
// 		console.log('guest user');
// 		break;
// 	case 'moderator':
// 		console.log('moderator user');
// 		break;
// 	case 'admin':
// 		console.log('admin user');
// 		break;
// 	default:
// 		console.log('unknown user');
// }

// just use if...then lol

// LOOPS
// repeat action number of times
// For
// for (let i = 0; i < 5; i++) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }
// you can also iterate backwards
// for (let i = 5; i >= 1; i--) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

// the loop executes as long as the condition is true (less than 5) then i is increased by 1

// WHILE loop
// in for loops the loop variable is inside the loop but in while loop it is external
// let i = 0;
// while (i <= 5) {
// 	if (i % 2 !== 0) console.log(i);
// 	i++;
// }

// Do-While Loops
// the loop variable will be outside like a while loop
// let i = 0;

// do {
// 	if (i % 2 !== 0) {
// recall this is for odd numbers
// 		console.log(i);
// 		i++;
// 	}
// } while (i <= 5);

// INFINITE LOOPS

// do while always executed at least once, even if the condition is false
// because the condition is evaluated at the end.

// dont forget increments (i ++ or i-- or i+3 etc) or else infinite loop lol
// while(true) is another infinite or do {} while(true)

// For...in Loops
// const person = {
// 	name: 'Mosh',
// 	age: 30,
// };

// for (let key in person) {
// 	//key will hold one of the properties of an object
// 	//for value: object-name[key name in for-in]
// 	console.log(key, person[key]);
// }

// // FOR OF LOOPS
// // new way to iterate through arrays
// // we just use the of keyword
// const colors = ['red', 'blue', 'green'];

// for (let color of colors) {
// 	console.log(color);
// }

// BREAK AND CONTINUE
// this applies to all loops

// let j = 0;
// while (j <= 10) {
// 	// if (j === 5) { this condition stops the loop :D
// 	// 	break;
// 	// }
// 	if (i % 2 === 0) {
// 		i++;
// 		continue; //jumps to the next iteration
// 		// this will jump to the begining of the loop, so each time it is even it adds another i
// 	}
// 	console.log(j);
// 	j++;
// }

// EXERCISES
// write a function that takes two numbers and returns the maximum of the two
// that is the bigger one.

// function maxNum(num1, num2) {
// 	let bigger;
// 	if (num1 >= num2) {
// 		bigger = num1;
// 	} else bigger = num2;

// 	return bigger;
// }


// function max(a, b) {
// 	return a > b ? a : b;
// }

// console.log(max(10, 4));
// // console.log(maxNum(1, 2));

// // EXERCISE 2
// function isLandscape(width, height) {
// 	return width > height;
// }
// // you dont have to explicitaly return true or false, its just automatic

// console.log(isLandscape(14, 112));

// EXERCISE
// if % 3 => Fizz
// if % 5 => Buzz
// if % 3 || 5 => FizzBuzz
// if number no divisible by 5 or 3 return input
// if not number => "Not a number"
// function fizzBuzz(input) {
// 	if (typeof input !== 'number') {
// 		return NaN;
// 	}
// 	if (input % 3 === 0 && input % 5 === 0) {
// 		return 'FizzBuzz';
// 	}
// 	if (input % 3 === 0) return 'Fizz';
// 	if (input % 5 === 0) return 'Buzz';
// 	return input;
// }

// console.log(fizzBuzz(true));

// speed limit = 70
// if below or at or less than 5 above = "ok"
// for every 5 above- you get one point
// if a driver gets more than 12 points => suspended
// use Math.floor

// function checkSpeed(speed) {
// 	const speedLimit = 80;
// 	const kmPerPoint = 5;
// 	if (speed < speedLimit + kmPerPoint) {
// 		console.log('Ok');
// 		return;
// 	} else {
// 		let points = Math.floor((speed - speedLimit) / kmPerPoint);
// 		if (points >= 12) console.log('Liscense suspended');
// 		else {
// 			console.log('points', points);
// 		}
// 	}
// }

// checkSpeed(75);

// function showNumbers(limit) {
// 	// for (let i = 0; i <= limit; i++) {
// 	// 	if (i % 2 === 0) {
// 	// 		console.log(i, 'EVEN');
// 	// 	} else {
// 	// 		console.log(i, 'ODD');
// 	// 	}
// 	// }
// 	// OR
// 	for (let i = 0; i <= limit; i++) {
// 		const message = i % 2 === 0 ? 'EVEN' : 'ODD';
// 		console.log(i, message);
// 	}
// }

// showNumbers(12);

// function countTruthy(array) {
// 	let count = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i]) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// const array = [0, '', 3, NaN, 1];

// console.log(countTruthy(array));

// const movie = {
// 	title: 'a',
// 	realeaseYear: 2018,
// 	rating: 4.5,
// 	director: 'b',
// };

// showProperties('string');
// function showProperties(obj) {
// 	for (key in movie) {
// 		if (typeof movie[key] == obj) {
// 			console.log(key, movie[key]);
// 		}
// 	}
// }
// function sum(limit) {
// 	let sum = 0;
// 	for (let i = 1; i <= limit; i++) {
// 		if (i % 3 === 0 || i % 5 === 0) {
// 			sum += i;
// 		}
// 	}
// 	return console.log(sum);
// }
// sum(10);

// const marks = [90, 80, 90];

// function calculateGrade(marks) {
// 	let sum = 0;

// 	for (let i = 0; i < marks.length; i++) {
// 		sum += marks[i];
// 	}
// 	let average = Math.floor(sum / marks.length);
// 	console.log(average);
// 	if (average <= 59) {
// 		console.log('F');
// 	} else if (average <= 69) {
// 		console.log('D');
// 	} else if (average <= 79) {
// 		console.log('C');
// 	} else if (average <= 89) {
// 		console.log('B');
// 	} else if (average <= 100) {
// 		console.log('A');
// 	}
// }
// calculateGrade(marks);

// function showStars(rows) {
// 	for (let i = 1; i <= rows; i++) {
// 		let pattern = '';
// 		for (let j = 0; j < i; j++) {
// 			pattern += '*';
// 		}
// 		console.log(pattern);
// 	}
// }
// showStars(8);

// function showPrimes(limit) {
// 	for (let number = 2; number <= limit; number++) {
// 		if (isPrime(number)) {
// 			console.log(number);
// 		}
// 	}
// }
// showPrimes(10);

// function isPrime(number) {
// 	for (let factor = 2; factor < number; factor++) {
// 		if (number % factor === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
