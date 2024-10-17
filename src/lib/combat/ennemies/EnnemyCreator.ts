import type FighterClass from "../Fighter.ts";

export default abstract class EnnemyCreatorClass {
  public abstract ennemyCreator(): FighterClass;

  public specialAttack(player: FighterClass) {
    const ennemy: FighterClass = this.ennemyCreator();

    return ennemy.specialAttack(player);
  }
}
