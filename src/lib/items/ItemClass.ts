import FighterClass from "../combat/Fighter.ts";

export default abstract class ItemClass {
  public abstract action(player: FighterClass): boolean;
  public abstract getId(): string;
  public abstract getName(): string;
  public abstract getDescription(): string;

  public toString(): string {
    return `${this.getName()}: ${this.getDescription()}`;
  }
}
