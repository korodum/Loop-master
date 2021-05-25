let swordShop = {
  level: 0,
  swords: [{
    strength: 1,
    gold: 1
  },
  {
    strength: 1,
    gold: 3
  },
  {
    strength: 1,
    gold: 5
  }
]
}

function buySword () {
  if (swordShop.level < swordShop.swords.length) {
    if (char.gold >= swordShop.swords[swordShop.level].gold) {
      char.strength += swordShop.swords[swordShop.level].strength
      char.gold -= swordShop.swords[swordShop.level].gold
      swordShop.level++
    }
  } else {
    console.log('Not today')
  }
}