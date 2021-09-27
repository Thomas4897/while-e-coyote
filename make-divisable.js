const prompt = require("prompt-sync")({ sigint: true });

//! Asks user for x value;
console.log("Enter x: ");
let x = Number(prompt("> "));

//! Asks use for y value;
console.log("Enter y: ");
let y = Number(prompt("> "));
console.log("");

//! Checks to see if x is divisble by y;
let divisable = x % y;

//! While loop set to repeat if divisable is not = to 0;
while (divisable !== 0) {
	console.log(x);

	//! Adds one to x each time the loop is run;
	x = x + 1;

	//! Checks if the new x is divisable by y;
	divisable = x % y;
}

console.log(x, "is divisable by", y);
