import type CliEvent from "../event/CliEvent.ts";
import FighterClass from "./Fighter.ts";

export default class SonGohanClass extends FighterClass {
  private static sonGohan: SonGohanClass;
  private stamina: number = 3;
  private observers: CliEvent[] = [];
  private healthTraining: number = 0;
  private strengthTraining: number = 0;
  private kiTraining: number = 0;

  private constructor() {
    super("Son Gohan", 10, 1, 1);
  }

  static createPlayer() {
    this.sonGohan ??= new SonGohanClass();
    return this.sonGohan;
  }

  attach(observer: CliEvent) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }
  detach(observer: CliEvent) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex > -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(type: "hit" | "skill") {
    for (let i = 0; i < this.observers.length; i++) {
      const observer = this.observers[i];
      observer.update(this, type);
    }
  }

  public override addHealth(): number {
    const result = super.addHealth();
    ++this.healthTraining;
    this.notify("skill");
    return result;
  }

  public override addStrength(): number {
    const result = super.addStrength();
    ++this.strengthTraining;
    this.notify("skill");
    return result;
  }

  public override addKi(): number {
    const result = super.addKi();
    ++this.kiTraining;
    this.notify("skill");
    return result;
  }

  public override takeHit(amount: number): boolean {
    const result: boolean = super.takeHit(amount);
    this.notify("hit");
    return result;
  }

  public useStamina() {
    return this.stamina--;
  }

  public addStamina(amount: number) {
    return (this.stamina += amount);
  }

  public regenerateStamina() {
    if (this.stamina < 3) return (this.stamina = 3);
    return this.stamina;
  }

  public getStamina() {
    return this.stamina;
  }

  public getHealthTraining() {
    return this.healthTraining;
  }

  public getStrengthTraining() {
    return this.strengthTraining;
  }

  public getKiTraining() {
    return this.kiTraining;
  }

  public ssjUnlock() {
    return (
      this.healthTraining > 2 &&
      this.strengthTraining > 2 &&
      this.kiTraining > 2
    );
  }
}
