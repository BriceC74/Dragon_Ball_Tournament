import type ItemClass from "./ItemClass.ts";

export default class InventoryClass {
  constructor(
    private item1?: ItemClass,
    private item2?: ItemClass,
    private item3?: ItemClass,
  ) {}

  public addItem(item: ItemClass) {
    switch (undefined) {
      case this.item1:
        this.item1 = item;
        break;
      case this.item2:
        this.item2 = item;
        break;
      case this.item3:
        this.item3 = item;
        break;
      default:
        break;
    }
  }

  public toString() {
    if (this.item1 && this.item2 && this.item3) {
      return `Inventory:${this.item1 ? `\n${this.item1.toString()}` : ""}${this.item2 ? `\n${this.item2.toString()}` : ""}${this.item3 ? `\n${this.item3.toString()}` : ""}`;
    }
    return `Inventory empty.`;
  }
}
