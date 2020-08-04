const asg = require("./abilityScoreGenerator.js");

const hpChecker = (character) => {
  hitPoints = 0;
  console.log(character.Class);
  if (character.Class === 'Fighter') {
    hitPoints = 10 + character.Modifiers.Con;
  } else if (character.Class === 'Wizard') {
    hitPoints = 6 + character.Modifiers.Con;
  } else if (character.Class === 'Rogue') {
    hitPoints = 8 + character.Modifiers.Con;
  } else if (character.Class === 'Cleric') {
    hitPoints = 8 + character.Modifiers.Con;
  }
  return hitPoints;
}

const goldRoller = (character) => {
  let rolls = [];

  if (character.Class === 'Fighter' || character.Class === 'Cleric') {
    let roll1 = Math.floor(Math.random() * Math.floor(4) + 1);
    let roll2 = Math.floor(Math.random() * Math.floor(4) + 1);
    let roll3 = Math.floor(Math.random() * Math.floor(4) + 1);
    let roll4 = Math.floor(Math.random() * Math.floor(4) + 1);
    let roll5 = Math.floor(Math.random() * Math.floor(4) + 1);
    rolls.push(roll1);
    rolls.push(roll2);
    rolls.push(roll3);
    rolls.push(roll4);
    rolls.push(roll5);
  } else if (character.Class === 'Wizard' || character.Class === 'Rogue') {
    let roll1 = Math.floor(Math.random() * Math.floor(4) + 1);
    let roll2 = Math.floor(Math.random() * Math.floor(4) + 1);
    let roll3 = Math.floor(Math.random() * Math.floor(4) + 1);
    let roll4 = Math.floor(Math.random() * Math.floor(4) + 1);
    rolls.push(roll1);
    rolls.push(roll2);
    rolls.push(roll3);
    rolls.push(roll4);
  } 
  
  const sum = rolls.reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum * 10;
}

module.exports = { hpChecker, goldRoller };