import SonGohanClass from "./SonGohan.ts";
import type { FighterInterface } from "./Fighter.ts";
import type FighterClass from "./Fighter.ts";

export default class SonGohanSsjClass implements FighterInterface {
  constructor(private sonGohan: SonGohanClass) {}

  public regenerateHealth() {
    return this.sonGohan.regenerateHealth();
  }

  public getInventory() {
    return this.sonGohan.getInventory();
  }

  public getHealth() {
    return this.sonGohan.getHealth() * 2;
  }

  public getStrength() {
    return this.sonGohan.getStrength() * 2;
  }

  public getKi() {
    return this.sonGohan.getKi() * 2;
  }

  public addHealth() {
    return this.sonGohan.addHealth();
  }

  public addStrength() {
    return this.sonGohan.addStrength();
  }

  public addKi() {
    return this.sonGohan.addKi();
  }

  public attack(type: "physical" | "ki", opponent: FighterClass) {
    return this.sonGohan.attack(type, opponent, this);
  }
  public takeHit(amount: number): boolean {
    return this.sonGohan.takeHit(amount);
  }

  public useStamina() {
    return this.sonGohan.useStamina();
  }

  public addStamina(amount: number) {
    return this.sonGohan.addStamina(amount);
  }

  public regenerateStamina() {
    return this.sonGohan.regenerateStamina();
  }

  public getStamina() {
    return this.sonGohan.getStamina();
  }

  public getHealthTraining() {
    return this.sonGohan.getHealthTraining();
  }

  public getStrengthTraining() {
    return this.sonGohan.getStrengthTraining();
  }

  public getKiTraining() {
    return this.sonGohan.getKiTraining();
  }

  public ssjUnlock() {
    return false;
  }

  public toString() {
    return this.sonGohan.toString({
      evolution: "🔥 Super Saiyan",
      strength: `${this.getStrength()} (x2)`,
      ki: `${this.getKi()} (x2)`,
    });
  }
}
