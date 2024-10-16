import FighterClass from "../combat/Fighter.ts";
import ItemClass from "./ItemClass.ts";

export default class GravityMachineClass extends ItemClass {
  private id: string = "gravityMachine";
  private name: string = "Gravity Machine";
  private description: string =
    "A capsule gravity machine that add one training";

  constructor() {
    super();
  }

  /* method */
  public action(player: FighterClass): boolean {
    const actualStamina: number = player.getStamina();

    return player.addStamina(1) === actualStamina + 1;
  }

  /* getter and setter */
  public getId() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getDescription() {
    return this.description;
  }
}
