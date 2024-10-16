import FighterClass from "../Fighter.ts";

export default class NamekFighterClass extends FighterClass {
  public override specialAttack(): void {
    console.log("Makankōsappō");
  }
}
