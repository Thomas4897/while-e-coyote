const prompt = require("prompt-sync")({ sigint: true });

//! Prompts use for initial string;
console.log("Enter a string: ");
let str = prompt("> ");
console.log("");

//! Saves intial string as str2;
let str2 = str;

//! While str length is lless than 10 the loop will continue;
while (str.length < 10) {
	console.log(str);

	//! Adds intial string (str2) to the end of new string;
	str = str + str2;
}
console.log(str);
console.log("Finished!");
