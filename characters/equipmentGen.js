const armor = {
  light: {
    padded: {
      cost: 5,
      ac: 11,
      maxDex: 10,
      minStr: 3,
      stealthDis: true
    },
    leather: {
      cost: 10,
      ac: 11,
      maxDex: 10,
      minStr: 3,
      stealthDis: false
    },
    studdedLeather: {
      cost: 45,
      ac: 12,
      maxDex: 10,
      minStr: 3,
      stealthDis: false
    }
  },
  medium: {
    hide: {
      cost: 10,
      ac: 12,
      maxDex: 2,
      minStr: 3,
      stealthDis: false
    },
    chainShirt: {
      cost: 50,
      ac: 13,
      maxDex: 2,
      minStr: 3,
      stealthDis: false
    },
    scaleMail: {
      cost: 50,
      ac: 14,
      maxDex: 2,
      minStr: 3,
      stealthDis: true
    }
  },
  heavy: {
    ringMail: {
      cost: 30,
      ac: 14,
      maxDex: 0,
      minStr: 3,
      stealthDis: true
    },
    chainMail: {
      cost: 75,
      ac: 16,
      maxDex: 0,
      minStr: 13,
      stealthDis: true
    }
  },
  shield: {
    cost: 10,
    ac: +2,
    maxDex: 10,
    minStr: 3,
    stealthDis: false
  }
}

const weapons = {
  simpleMelee: {
    club: {
      cost: 0.1,
      damage: '1d4 b',
      props: 'light'
    },
    dagger: {
      cost: 2,
      damage: '1d4 p',
      props: 'finesse, light, thrown (range 20/60)'
    }
  }
}

const equipmentBuyer = (character) => {
  if (character.Class === 'Fighter') {
    if (character.Gold >= 100) {
      character.Armor = {Chainmail: armor.heavy.chainMail},
      character.Gold = character.Gold - armor.heavy.chainMail.cost
    }

    if (character.Gold >= 20)
  }
}

module.exports = {
  equipmentBuyer,
  armor
}