// function myFunction(parameter1, parameter2,..., parameterN) {

    // function body

// }

function makeLine(size) {
  let line = '';
  for (let i=0; i < size; i++) {
    line += '#';
  }
  return line;
} 

console.log(makeLine(5)); 

console.log("__________");

function makeSquare(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
  let row = '';
    for ( let j=0; j < size; j++) {
      row += '#'
    }
    console.log(row+'');
  }
}

makeSquare(4) 

console.log("__________");

function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}

console.log(makeRectangle(4,2));

console.log("__________");

function makeDownwardStairs(height) {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1) + '\n');
  }
  return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(10)); 

console.log("__________");


function makeSpaceLine(numSpaces, numChars) {
   spaces = '';
  for (let i = 0; i < numSpaces; i++) {
    spaces += " "
  }
  for (let j = 0; j < numChars; j++) {
    spaces += '#'
  }
  for (let i = 0; i < numSpaces; i++) {
    spaces += " "
  }
  return spaces
}

console.log(makeSpaceLine(3,5)); 

function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(10)); 