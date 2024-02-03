// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

//Initial Expression 
for (let i = 3; i < 10; i++) {
   console.log(i);
}

let name = "LaunchCode";
for (let i = 6; i < name.length; i++) {
   console.log(name[i]);
}
//Loop Condition  - boolean expression, FALSE. Nothing prints 
for (let i = 0; i < -1; i++) {
   console.log("LaunchCode");
}
//Update Expression
for (let i = 0; i < 51; i = i + 2) {
   console.log(i);
}

//Check Your Understanding 
let phrase = "Chili Cook-off";
for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}
//Prints ClCkf, loops 5 times 

//Adding 1 n - accumulator pattern. Total is the accumulator 
let n = 6;
let total = 0;
for (let i = 1; i <= n; i++) {
   total += i;
}
console.log(total);
