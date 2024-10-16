import FighterClass from "./Fighter.ts";

export default class SonGohanClass extends FighterClass {
  private static sonGohan: SonGohanClass;

  private constructor() {
    super("sonGohan", 5, 1, 1);
  }

  static createPlayer() {
    this.sonGohan ??= new SonGohanClass();
    return this.sonGohan;
  }
}
