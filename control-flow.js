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

let hour = 10;

if (hour >= 6 && hour < 12) {
	console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
	console.log('Good Afternoon');
} else {
	console.log('Good Evening');
}

// Switch...Case
let role = 'guest';
switch (role) {
	case 'guest':
		console.log('guest user');
		break;
	case 'moderator':
		console.log('moderator user');
		break;
	case 'admin':
		console.log('admin user');
		break;
	default:
		console.log('unknown user');
}

//just use if...then lol

//LOOPS
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
while (i <= 5) {
	if (i % 2 !== 0) console.log(i);
	i++;
}

// Do-While Loops
// the loop variable will be outside like a while loop
let i = 0;

do {
	if (i % 2 !== 0) {
		//recall this is for odd numbers
		console.log(i);
		i++;
	}
} while (i <= 5);

// do while always executed at least once, even if the condition is false
// because the condition is evaluated at the end.
