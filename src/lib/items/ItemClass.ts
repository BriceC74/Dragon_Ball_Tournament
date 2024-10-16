import FighterClass from "../combat/Fighter.ts";

export default abstract class ItemClass {
  public abstract action(player: FighterClass): boolean;
}
