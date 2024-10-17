import FighterClass from "../Fighter.ts";

export default class NamekFighterClass extends FighterClass {
  public override specialAttack(player: FighterClass): void {
    super.specialAttack(player, "Makankōsappō !!!");
  }
}
