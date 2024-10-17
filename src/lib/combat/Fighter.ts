import { checkbox, Separator } from "@inquirer/prompts";
import InventoryBuilderClass from "../items/InventoryBuilder.ts";
import InventoryClass from "../items/Inventory.ts";
import SenzuBeanClass from "../items/SenzuBean.ts";
import GravityMachineClass from "../items/GravityMachine.ts";
import type SonGohanSsjClass from "./SonGohanSSJ.ts";

export interface FighterInterface {
  getStrength(): number;
  getKi(): number;
}

export default class FighterClass {
  private actualHealth: number;
  private inventory?: InventoryClass;
  private isSpecialAttackUsed: boolean = false;

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

  public attack(
    type: "physical" | "ki",
    target: FighterClass,
    player?: SonGohanSsjClass,
  ): boolean {
    let damages: number;
    switch (type) {
      case "physical":
        damages = player?.getStrength() ?? this.strength;
        break;
      case "ki":
        damages = player?.getKi() ?? this.ki;
        break;
    }
    return target.takeHit(damages);
  }

  public takeHit(amount: number): boolean {
    this.actualHealth -= amount;
    return this.actualHealth < 1;
  }

  public specialAttack(player: FighterClass, catchPhrase?: string) {
    if (!this.isSpecialAttackUsed) {
      console.log(catchPhrase);
      player.takeHit(this.ki + 2);
    } else {
      player.takeHit(this.ki);
    }
    this.isSpecialAttackUsed = true;
  }

  /* getter and setter */
  public getInventory() {
    return this.inventory;
  }

  public addHealth(): number {
    return ++this.health;
  }

  public rest(): number {
    return ++this.actualHealth;
  }

  public getHealth(): number {
    return this.health;
  }

  public getActualHealth(): number {
    return this.actualHealth;
  }

  public addStrength(): number {
    return ++this.strength;
  }

  public getStrength(): number {
    return this.strength;
  }

  public addKi(): number {
    return ++this.ki;
  }

  public getKi(): number {
    return this.ki;
  }

  public toStringHealth() {
    const healthText: string[] = [];
    for (let i = 0; i < this.health; i++) {
      if (i >= this.actualHealth) {
        healthText.push("🖤");
        continue;
      }
      healthText.push("💛");
    }
    return `💛 Health: ${healthText.join("")}`;
  }

  public toString({
    evolution,
    strength,
    ki,
  }: {
    evolution?: string;
    strength?: string;
    ki?: string;
  } = {}) {
    return `${this.name}:${evolution ? `\n${evolution}` : ""}
${this.toStringHealth()}
💪 Strength: ${strength ?? this.strength}
⚡️ Ki: ${ki ?? this.ki}`;
  }
}
