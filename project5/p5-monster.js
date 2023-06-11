class Monster {
    constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
      this.monsterName = monsterName;
      this.minimumLife = minimumLife;
      this.currentLife = currentLife;
      this.isAlive = this.currentLife >= this.minimumLife;
    }
  
    updateLife(lifeChangeAmount) {
      this.currentLife = this.currentLife + lifeChangeAmount < 0 ? 0 : this.currentLife + lifeChangeAmount;
      this.isAlive = this.currentLife >= this.minimumLife;
    }
  
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
      const lifeChangeAmount = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
      this.updateLife(-lifeChangeAmount);
      console.log(`${this.monsterName} lost ${lifeChangeAmount} life points.`);
    }
  }
  
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  module.exports = Monster;