const armor = {
  light: {
    padded: {
      name: 'Padded',
      cost: 5,
      ac: 11,
      maxDex: 10,
      minStr: 3,
      stealthDis: true
    },
    leather: {
      name: 'Leather',
      cost: 10,
      ac: 11,
      maxDex: 10,
      minStr: 3,
      stealthDis: false
    },
    studdedLeather: {
      name: 'Studded Leather',
      cost: 45,
      ac: 12,
      maxDex: 10,
      minStr: 3,
      stealthDis: false
    }
  },
  medium: {
    hide: {
      name: 'Hide',
      cost: 10,
      ac: 12,
      maxDex: 2,
      minStr: 3,
      stealthDis: false
    },
    chainShirt: {
      name: 'Chain Shirt',
      cost: 50,
      ac: 13,
      maxDex: 2,
      minStr: 3,
      stealthDis: false
    },
    scaleMail: {
      name: 'Scale Mail',
      cost: 50,
      ac: 14,
      maxDex: 2,
      minStr: 3,
      stealthDis: true
    }
  },
  heavy: {
    ringMail: {
      name: 'Ring Mail',
      cost: 30,
      ac: 14,
      maxDex: 0,
      minStr: 3,
      stealthDis: true
    },
    chainMail: {
      name: 'Chain Mail',
      cost: 75,
      ac: 16,
      maxDex: 0,
      minStr: 13,
      stealthDis: true
    }
  },
  shield: {
    name: 'Shield',
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
      name: 'Club',
      cost: 0.1,
      damage: '1d4 b',
      props: 'light'
    },
    dagger: {
      name: 'Dagger',
      cost: 2,
      damage: '1d4 p',
      props: 'finesse, light, thrown (range 20/60)'
    },

  },
  martialMelee: {
    longsword: {
      name: 'Longsword',
      cost: 15,
      damage: '1d8',
      props: 'versatile (1d10)'
    },
    battleaxe: {
      name: 'Battleaxe',
      cost: 10,
      damage: '1d8',
      props: 'versatile (1d10)'
    },
    flail: {
      name: 'Flail',
      cost: 10,
      damage: '1d8',
      props: null
    },
    morningstar: {
      name: 'Morningstar',
      cost: 15,
      damage: '1d8',
      props: null
    },
    warpick: {
      name: 'Warpick',
      cost: 5,
      damage: '1d8',
      props: null
    },
    warhammer: {
      name: 'Warhammer',
      cost: 5,
      damage: '1d8',
      props: null
    }
  }
}

const armorBuyer = (character) => {
  if (character.Class === 'Fighter') {
    if (character.Gold >= 100) {
      character.Armor = armor.heavy.chainMail
      character.Gold = character.Gold - armor.heavy.chainMail.cost
    } else if (character.Gold >= 75 && character.Gold < 100 && character.Modifiers.Dex < 2) {
      character.Armor = armor.heavy.ringMail
      character.Gold = character.Gold - armor.heavy.ringMail.cost
    } else if (character.Gold >= 75 && character.Gold < 100 && character.Modifiers.Dex > 2) {
      character.Armor = armor.medium.chainShirt
      character.Gold = character.Gold - armor.medium.chainShirt.cost
    } else if (character.Gold >= 75 && character.Gold < 100 && character.Modifiers.Dex === 2) {
      character.Armor = armor.medium.scaleMail
      character.Gold = character.Gold - armor.medium.scaleMail.cost
    } else if (character.Gold >= 50 && character.Gold < 75 && character.Modifiers.Dex < 2) {
      character.Armor = armor.heavy.ringMail
      character.Gold = character.Gold - armor.heavy.ringMail.cost
    } else if (character.Gold >= 70 && character.Gold < 90 && character.Modifiers.Dex >= 2) {
      character.Armor = armor.light.studdedLeather
      character.Gold = character.Gold - armor.light.studdedLeather.cost
    } else if (character.Gold >= 50 && character.Gold < 80 && character.Modifiers.Dex >= 2) {
      character.Armor = armor.light.leather
      character.Gold = character.Gold - armor.light.leather.cost
    }
  }
}

const randomProperty = (obj) => {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
}

const weaponBuyer = (character) => {
  if (character.Class === 'Fighter') {
    if (character.Gold >= 20) {
      // character[randomProperty(weapons.martialMelee).name]
      character.Weapon = randomProperty(weapons.martialMelee);
      character.Gold = character.Gold - weapons.martialMelee.longsword.cost;
    } else {
      character.Weapon = {Club: weapons.simpleMelee.club};
      character.Gold -= weapons.simpleMelee.club.cost;
    }
    if (character.Gold >= 10) {
      character.Shield = armor.shield;
      character.Gold -= armor.shield.cost;
    }
  }
}

module.exports = {
  armorBuyer,
  weaponBuyer,
  armor,
  weapons
}