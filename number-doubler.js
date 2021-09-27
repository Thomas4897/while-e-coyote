const prompt = require("prompt-sync")({ sigint: true });

//! Prompts user for an initail number;
console.log("Enter a number: ");
let number = Number(prompt("> "));
console.log("");

//! While loop set to run until the number is less than 100;
while (number < 100) {
	//! Doubles the number each loop;
	number = number * 2;

	//! Prints new number
	console.log(number);
}
console.log("Finished!");
