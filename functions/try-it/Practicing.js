


function vowelBonusScorer(word) {
let score = 0;
word = word.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"]; 
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    score = score + 3;
  } else { 
    score = score + 1;
  }
}
return console.log(score);
}

vowelBonusScorer("ATE")
