const RPS = require('../RPS.js'); 

describe("whoWon", function(){

    test("When players tie", function() {
    let output = RPS.whoWon('rock', 'rock');
    expect(output).toBe('TIE!'); 
    });

    test("When player 1 wins", function() {
    let output = RPS.whoWon('paper', 'rock');
    expect(output).toBe('Player 1 wins!'); 
    });

    test("When player 2 wins", function() {
    let output = RPS.whoWon('rock', 'paper');
    expect(output).toBe('Player 2 wins!'); 
    });

    // test("No winner", function() {
    // let output = RPS.whoWon('!scissors', 'rock');
    // expect(output).toBe('Invalid, no one wins!'); 
    // });

   });