import FighterClass from "../Fighter.ts";

export default class AndroidFighterClass extends FighterClass {
  public override specialAttack(player: FighterClass): void {
    this.regenerateHealth();
    console.log("Infinite stamina !!");
  }
}
