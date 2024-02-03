let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
}; 

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
}; 

let organism = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)}
}; 


superChimpOne["astronautId"] = 1;
salamander["astronautId"] = 2;
superChimpTwo["astronautId"] = 3;
dog["astronautId"] = 4;
organism["astronautId"] = 5;

let crew = [superChimpOne, salamander, superChimpTwo, dog, organism] 

console.log(superChimpOne); 
console.log(salamander);
console.log(superChimpTwo);
console.log(dog);
console.log(organism); 

console.log(crew); 

console.log(superChimpOne.move());
