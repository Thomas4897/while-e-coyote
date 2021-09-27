const prompt = require("prompt-sync")({ sigint: true });

//! Ask user to input numbers or 'done';
console.log("Enter some numbers (type 'done' when complete): ");
let number = prompt("");
console.log("");

//! Set sum to 0;
let sum = 0;

//! While user input does not = 'done' keep summing the numbers inputted;
while (number !== "done") {
	//! Sum now equals the users input plus sum;
	sum = Number(number) + Number(sum);

	//! Prompts user for additional input;
	number = prompt("");
}

//! Prints final sum;
console.log("Those numbers sum to", sum);
