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

module.exports = { hpChecker };