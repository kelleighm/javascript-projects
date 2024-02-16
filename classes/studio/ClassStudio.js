//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name; 
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let sum = 0; 
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i]
        }
    average = sum / this.scores.length; 
    return average;
}
}

let firstCandidate = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]); 
let secondCandidate = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]); 
let thirdCandidate = new CrewCandidate('Glad Gator', 225, [75, 78, 62]); 

// console.log(firstCandidate);
// console.log(secondCandidate);
// console.log(thirdCandidate); 

// firstCandidate.addScore(83); 



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.