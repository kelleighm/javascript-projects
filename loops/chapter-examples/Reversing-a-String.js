let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed);


for (let i = 0; i < str.length; i++) {
    reversed = reversed + str[i];
}
// both print as the same 


