import GravityMachineClass from "./GravityMachine.ts";
import InventoryClass from "./Inventory.ts";
import SenzuBeanClass from "./SenzuBean.ts";

export default class InventoryBuilderClass {
  private inventory: InventoryClass;

  public constructor() {
    this.inventory = new InventoryClass();
  }

  public reset(): void {
    this.inventory = new InventoryClass();
  }

  public addSenzuBean() {
    this.inventory.addItem(new SenzuBeanClass());
    return this;
  }

  public addGravityMachine() {
    this.inventory.addItem(new GravityMachineClass());
    return this;
  }

  public build() {
    const result: InventoryClass = this.inventory;
    this.reset();
    return result;
  }
}
