import FighterClass from "../Fighter.ts";

export default class HumanFighterClass extends FighterClass {
  public override specialAttack(): void {
    console.log("Kienzan");
  }
}
