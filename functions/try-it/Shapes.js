// function myFunction(parameter1, parameter2,..., parameterN) {

    // function body

// }

function makeLine(size) {
  let line = '';
  for (i=0; i < size; i++) {
    line += '#';
  }
  return line;
} 

console.log(makeLine(5)); 

function makeSquare(size) {
  let line = '';
  for (let i = 0; i < size; i++)
