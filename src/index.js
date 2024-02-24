class Character {
    constructor(health, attack) {
      this.health = health
      this.attack = attack
      this.stoned = false;
    }
    setStoned (value) {
        return this.stoned = value;
    }
    getStoned () {
        return this.stoned;
    }
    setAttack (value) {
        return this.health -= value;
    }
    getAttack (attack, distance) {
        if (distance < 1 || distance > 10) {
            return 0
        }
        let attackPower = attack * (11 - distance) / 10
        if (this.stoned) {
            attackPower -= Math.log2(distance) * 5
            return Math.round(attackPower);
        } 
        return Math.round(attackPower);
    }
}
  

export class Magician extends Character {
    constructor (health, attack) {
        super (health, attack)
        this.type = 'Magitian';
    }
}

export class Daemon extends Character {
    constructor (health, attack) {
        super(health, attack)
        this.type = 'Daemon'
    }
}