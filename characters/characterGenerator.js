const asg = require("./abilityScoreGenerator.js");
const classChooser = require("./classChooser.js");

let character = {};

const charGenerator = () => {
  character.Class = classChooser.classChooser().class,
  character.Prime = asg.primeAttr,
  character.Secondary = asg.secondaryAttr,
  character.Modifiers = asg.mods,
  character.Abilities = asg.scoresObj
}

charGenerator();
console.log(character);