const input = require('readline-sync');
let str = "LaunchCode";
let numLetters = input.question('Enter number of letters to be moved ');

//Adjust back to 3 if numbers are too high 

if (numLetters > str.length || numLetters < 1) {
    console.log(`You asked for ${numLetters} letters to be moved, but ${str} is only ${str.length} letters long! So we only moved 3 letters.`);
    numLetters = 3;
    }

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
str1 = str.slice(numLetters) + str.slice(0,numLetters); 

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str1} is ${str} rearranged.`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//added up top// 

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
