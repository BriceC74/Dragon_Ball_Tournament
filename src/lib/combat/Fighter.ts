export default class FighterClass {
  private actualHealth: number;
  private stamina: number = 3;

  constructor(
    private name: string,
    private health: number,
    private strength: number,
    private ki: number,
  ) {
    this.actualHealth = health;
  }

  /* method */
  public regenerateHealth(amount?: number): number {
    if (amount) {
      this.actualHealth += amount;

      if (this.actualHealth > this.health) this.actualHealth = this.health;

      return this.actualHealth;
    }

    this.actualHealth = this.health;

    return this.actualHealth;
  }

  public addStamina(amount: number) {
    return (this.stamina += amount);
  }

  public regenerateStamina() {
    return (this.stamina = 3);
  }

  /* getter and setter */
  public getHealth(): number {
    return this.health;
  }

  public getStamina() {
    return this.stamina;
  }

  public toString() {
    return `${this.name}:\n❤️ Health: ${this.actualHealth}\n💪 Strength: ${this.strength}\n⚡️ Ki: ${this.ki}`;
  }
}
