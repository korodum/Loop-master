// CHARACTER CONSTRUCTOR
const Character = function () {
  this.startY = RESPAWNY
  this.startX = RESPAWNX
  this.y = 3
  this.x = 8
  this.previousY = 0
  this.previousX = 0
  this.strength = 5
  this.name = 'Tanuki'
  this.health = 50
  this.gold = 0
  this.loop = 1

  // CHARACTER START POSITION
  this.startPosition = function () {
    map[this.y][this.x] = 2
  }

  // CHARACTER MOVEMENT MOTOR
  this.moveCharacter = function () {
    map[this.y][this.x] = 1
    // CHARACTER FIND PATH OR ENEMY
    if (map[this.y][this.x + 1] === 1 && this.x + 1 !== this.previousX) {
      this.previousY = this.y
      this.previousX = this.x
      this.x++
    } else if (map[this.y + 1][this.x] === 1 && this.y + 1 !== this.previousY) {
      this.previousY = this.y
      this.previousX = this.x
      this.y++
    } else if (map[this.y][this.x - 1] === 1 && this.x - 1 !== this.previousX) {
      this.previousY = this.y
      this.previousX = this.x
      this.x--
    } else if (map[this.y - 1][this.x] === 1 && this.y - 1 !== this.previousY) {
      this.previousY = this.y
      this.previousX = this.x
      this.y--
    }
    map[this.y][this.x] = 2
  }

  // CHARACTER COMBAT
  this.findEnemy = function () {
    if (map[this.y][this.x + 1] === 3 && this.x + 1 !== this.previousX) {
      combat(this.y, this.x + 1)
    }
    if (map[this.y + 1][this.x] === 3 && this.y + 1 !== this.previousY) {
      combat(this.y + 1, this.x)
    }
    if (map[this.y][this.x - 1] === 3 && this.x - 1 !== this.previousX) {
      combat(this.y, this.x - 1)
    }
    if (map[this.y - 1][this.x] === 3 && this.y - 1 !== this.previousY) {
      combat(this.y - 1, this.x)
    }
  }
}
