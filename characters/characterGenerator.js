const asg = require("./abilityScoreGenerator.js");
const classChooser = require("./classChooser.js");
const bonuses = require("./bonusesCalc.js");

let character = {};

const charGenerator = () => {
  character.Class = classChooser.classChooser().class,
  character.Prime = asg.primeAttr,
  character.Secondary = asg.secondaryAttr,
  character.Modifiers = asg.mods,
  character.Abilities = asg.scoresObj,
  character.hp = bonuses.hpChecker(character);
  return character;
}

charGenerator();
console.log(character);