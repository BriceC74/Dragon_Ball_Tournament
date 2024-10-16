import { checkbox, Separator } from "@inquirer/prompts";
import InventoryBuilderClass from "../items/InventoryBuilder.ts";
import InventoryClass from "../items/Inventory.ts";
import SenzuBeanClass from "../items/SenzuBean.ts";
import GravityMachineClass from "../items/GravityMachine.ts";

export default class FighterClass {
  private actualHealth: number;
  private stamina: number = 3;
  private inventory?: InventoryClass;

  constructor(
    private name: string,
    private health: number,
    private strength: number,
    private ki: number,
  ) {
    this.actualHealth = health;
  }

  /* method */
  public async chooseItems() {
    const message = "Choose 3 items:";
    const choices: any[] = [];
    const senzuBean = new SenzuBeanClass();
    const gravityMachine = new GravityMachineClass();

    for (let i = 0; i < 3; i++) {
      choices.unshift({
        name: senzuBean.getName(),
        description: senzuBean.getDescription(),
        value: senzuBean.getId(),
      });
      choices.push({
        name: gravityMachine.getName(),
        description: gravityMachine.getDescription(),
        value: gravityMachine.getId(),
      });
    }
    choices.splice(3, 0, new Separator());

    const items = await checkbox({
      message,
      choices,
      validate: (choices) => {
        if (choices.length < 4) {
          return true;
        }
        return "Choose between 0 and 3 items.";
      },
    });
    const inventory = new InventoryBuilderClass();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      switch (item) {
        case "senzuBean":
          inventory.addSenzuBean();
          break;
        case "gravityMachine":
          inventory.addGravityMachine();
          break;

        default:
          break;
      }
    }

    this.inventory = inventory.build();
  }
  public regenerateHealth(amount?: number): number {
    if (amount) {
      this.actualHealth += amount;

      if (this.actualHealth > this.health) this.actualHealth = this.health;

      return this.actualHealth;
    }

    this.actualHealth = this.health;

    return this.actualHealth;
  }

  public addStamina(amount: number) {
    return (this.stamina += amount);
  }

  public regenerateStamina() {
    return (this.stamina = 3);
  }

  public specialAttack() {
    throw new Error("Not Implemented.");
  }

  /* getter and setter */
  public getInventory() {
    return this.inventory;
  }

  public getHealth(): number {
    return this.health;
  }

  public getStamina() {
    return this.stamina;
  }

  public toString() {
    return `${this.name}:\n❤️ Health: ${this.actualHealth}\n💪 Strength: ${this.strength}\n⚡️ Ki: ${this.ki}`;
  }
}
