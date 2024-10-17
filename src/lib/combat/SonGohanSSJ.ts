import SonGohanClass from "./SonGohan.ts";
import type { FighterInterface } from "./Fighter.ts";

export default class SonGohanSsjClass implements FighterInterface {
  constructor(private sonGohan: SonGohanClass) {}

  public getHealth(): number {
    return this.sonGohan.getHealth() * 2;
  }

  public getStrength(): number {
    return this.sonGohan.getStrength() * 2;
  }

  public getKi(): number {
    return this.sonGohan.getKi() * 2;
  }

  public toString() {
    return this.sonGohan.toString({
      evolution: "🔥 Super Saiyan",
      strength: `${this.getStrength()} (x2)`,
      ki: `${this.getKi()} (x2)`,
    });
  }
}
