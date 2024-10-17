import FighterClass from "../Fighter.ts";

export default class HumanFighterClass extends FighterClass {
  public override specialAttack(player: FighterClass): void {
    super.specialAttack(player, "Kienzan !!");
  }
}
