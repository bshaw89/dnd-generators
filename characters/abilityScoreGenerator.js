const { builtinModules } = require("module");

const rollScore = () => {
  let rolls = [];
  let roll1 = Math.floor(Math.random() * Math.floor(6) + 1);
  let roll2 = Math.floor(Math.random() * Math.floor(6) + 1);
  let roll3 = Math.floor(Math.random() * Math.floor(6) + 1);
  let roll4 = Math.floor(Math.random() * Math.floor(6) + 1);
  rolls.push(roll1);
  rolls.push(roll2);
  rolls.push(roll3);
  rolls.push(roll4);
  let sortedRolls = rolls.sort();
  sortedRolls.shift();
  
  const sum = rolls.reduce(function(a, b) {
    return a + b;
  }, 0);

  return sum;
}

const abilityScores = () => {
  let scoresTotal = []
  let num = 1;
  
  while (num <= 6) {
    scoresTotal.push(rollScore());
    num++;
  }
  return scoresTotal;
}

let scoresObj = {
  Str: rollScore(),
  Dex: rollScore(),
  Con: rollScore(),
  Int: rollScore(),
  Wis: rollScore(),
  Cha: rollScore()
}

let primeAttr = {};
let secondaryAttr = {};

const primeChecker = (scores) => {
  let max = 0;
  for (let score in scores) {
    if (scores[score] > max) {
      max = scores[score];
      primeAttr = {};
      primeAttr[score] = scores[score];
    }
  }
  return primeAttr;
}

const secondaryChecker = (scores) => {
  let max = 0;
  for (let score in scores) {
    if (scores[score] > max && scores[score] < Object.values(primeAttr)) {
      max = scores[score];
      secondaryAttr = {};
      secondaryAttr[score] = scores[score];
    }
  }
  return secondaryAttr;
}

console.log(scoresObj, primeChecker(scoresObj), secondaryChecker(scoresObj));

module.exports = { abilityScores, primeChecker, secondaryChecker, scoresObj };