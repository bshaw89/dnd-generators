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
    if ((!primeAttr[score]) && (scores[score] > max) && (scores[score] <= Object.values(primeAttr))) {
      max = scores[score];
      secondaryAttr = {};
      secondaryAttr[score] = scores[score];
    }
  }
  return secondaryAttr;
}

const modifiers = (scores) => {
  let mods = {};
  for (let score in scores) {
    if (scores[score] >= 10 && scores[score] <= 11) {
      mods[score] = 0;
    } else if (scores[score] >= 12 && scores[score] <= 13) {
      mods[score] = 1;
    } else if (scores[score] >= 14 && scores[score] <= 15) {
      mods[score] = 2;
    } else if (scores[score] >= 16 && scores[score] <= 17) {
      mods[score] = 3;
    } else if (scores[score] >= 18 && scores[score] <= 19) {
      mods[score] = 4;
    } else if (scores[score] >= 8 && scores[score] <= 9) {
      mods[score] = -1;
    } else if (scores[score] >= 6 && scores[score] <= 7) {
      mods[score] = -2;
    } else if (scores[score] >= 4 && scores[score] <= 5) {
      mods[score] = -3;
    } else if (scores[score] >= 2 && scores[score] <= 3) {
      mods[score] = -4;
    } else if (scores[score] === 1) {
      mods[score] = -5;
    }
  }
  return mods;
}

console.log(scoresObj, primeChecker(scoresObj), secondaryChecker(scoresObj), modifiers(scoresObj));

module.exports = { abilityScores, primeChecker, secondaryChecker, scoresObj, primeAttr, secondaryAttr };