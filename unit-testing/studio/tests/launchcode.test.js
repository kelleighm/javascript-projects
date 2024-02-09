// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
//Write your unit tests here!
//A key called organization with a value of "nonprofit" 
  test("Return 'non-profit' as key value of organization", function(){
    let keyVal = launchcode.organization; 
    expect(keyVal).toBe('nonprofit'); 
  })
  
//A key called executiveDirector with a value of "Jeff" 
  test("Return 'Jeff' as a key value of executiveDirector", function(){
    let keyVal = launchcode.executiveDirector;
    expect(keyVal).toBe('Jeff'); 
  })

//A key called percentageCoolEmployees with a value of 100
  test("Return percentageCoolEmployees with a value of 100", function(){
    let keyVal = launchcode.percentageCoolEmployees;
    expect(keyVal).toBe(100); 
  })

  test("Return programsOffered with a value of ['Web Development', 'Data Analysis', 'Liftoff']", function(){
    let keyVal = launchcode.programsOffered;
    let index = launchcode.programsOffered.length;
    expect(keyVal[0]).toBe("Web Development"); 
    expect(keyVal[1]).toBe("Data Analysis");
    expect(keyVal[2]).toBe("Liftoff");
    expect(index).toBe(3); 
  })


//For launchOutput:
//When passed a number that is only divisible by 2, return 'Launch!'
  test("Divisible by 2", function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!'); 
  });

  test("Divisible by 3", function(){
     expect(launchcode.launchOutput(3)).toBe('Code!');
  });

  test("Divisible by 5", function(){
     expect(launchcode.launchOutput(5)).toBe('Rocks!'); 
  });

  test("Divisible by 2 AND 3", function(){
     expect(launchcode.launchOutput(6)).toBe('LaunchCode!'); 
  });



});