import type SonGohanClass from "../combat/SonGohan.ts";
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
  public action(player: SonGohanClass): boolean {
    const previousStamina: number = player.getStamina();
    const stamina = player.addStamina(1);

    return stamina === previousStamina + 1;
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
