const prompt = require("prompt-sync")({ sigint: true });

//! Prompts user for the length of their fibonacci sequence;
console.log('Enter a value for "n": ');
let n = Number(prompt("> "));
console.log("");

//! Setting intial number1 & number2 values to 0 & 1;
let number1 = 0;
let number2 = 1;

//! Setting intial sum & count values to 0;
let sum = 0;
let count = 0;

//! While count does not equal n continue the fibonacci squence;
while (count !== n) {
	console.log(number1);

	//! Sum now equals number1 plus number2;
	sum = number1 + number2;

	//! Number1 value set as last number2 value;
	number1 = number2;

	//! Number2 becomes the sum of the last two values
	number2 = sum;

	//! One is added to the count each time the while loop runs
	count = count + 1;
}

console.log("Finished!");
