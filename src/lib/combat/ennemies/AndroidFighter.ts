import FighterClass from "../Fighter.ts";

export default class AndroidFighterClass extends FighterClass {
  public override specialAttack(): void {
    console.log("Infinite stamina");
  }
}
