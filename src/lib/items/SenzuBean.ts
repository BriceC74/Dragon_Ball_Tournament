import FighterClass from "../combat/Fighter.ts";
import ItemClass from "./ItemClass.ts";

export default class SenzuBeanClass extends ItemClass {
  private id: string = "senzuBean";
  private name: string = "Senzu Bean";
  private description: string = "Regenerate the maximum of health";

  constructor() {
    super();
  }

  /* method */
  public action(player: FighterClass): boolean {
    const playerHealth: number = player.getHealth();

    return player.regenerateHealth() > playerHealth;
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
