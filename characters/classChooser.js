const asg = require("./abilityScoreGenerator.js");

let character = {};

const classChooser = () => {
  asg.abilityScores(asg.scoresObj);
  asg.primeChecker(asg.scoresObj);
  asg.secondaryChecker(asg.scoresObj);
  const prime = Object.keys(asg.primeAttr)[0];
  const secondary = Object.keys(asg.secondaryAttr)[0];
  if (prime === "Cha" && secondary === "Str") {
    character.class = "Fighter";
    return character;
  } else if (prime === "Cha" && secondary === "Dex") {
    character.class = "Rogue";
    return character;
  } else if (prime === "Cha" && secondary === "Int") {
    character.class = "Wizard";
    return character;
  } else if (prime === "Cha" && secondary === "Wis") {
    character.class = "Cleric";
    return character;
  } else if (prime === "Cha" && secondary === "Con") {
    character.class = "Fighter";
    return character;
  } else if (prime === "Con" && secondary === "Str") {
    character.class = "Fighter";
    return character;
  } else if (prime === "Con" && secondary === "Dex") {
    character.class = "Rogue";
    return character;
  } else if (prime === "Con" && secondary === "Int") {
    character.class = "Wizard";
    return character;
  } else if (prime === "Con" && secondary === "Wis") {
    character.class = "Cleric";
    return character;
  } else if (prime === "Con" && secondary === "Cha") {
    character.class = "Fighter";
    return character;
  } else if (prime === "Str") {
    character.class = "Fighter";
    return character;
  } else if (prime === "Dex") {
    character.class = "Rogue";
    return character;
  } else if (prime === "Int") {
    character.class = "Wizard";
    return character;
  } else if (prime === "Wis") {
    character.class = "Cleric";
    return character;
  }
};

// console.log(classChooser());

module.exports = {
  classChooser
} 


