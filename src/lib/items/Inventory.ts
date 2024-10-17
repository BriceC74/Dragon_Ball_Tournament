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

  public getItem(index: 0 | 1 | 2): ItemClass | undefined {
    switch (index) {
      case 0:
        return this.item1 as ItemClass;
      case 1:
        return this.item2 as ItemClass;
      case 2:
        return this.item3 as ItemClass;
    }
  }

  public removeItem(index: 0 | 1 | 2): void {
    switch (index) {
      case 0:
        this.item1 = undefined;
        break;
      case 1:
        this.item2 = undefined;
        break;
      case 2:
        this.item3 = undefined;
        break;
    }
  }

  public asChoices() {
    const emptyChoices: any = {
      name: "Empty",
      description: "Don't select it.",
      value: -1,
    };
    const choices: any[] = [];
    if (this.item1) {
      choices.push({
        name: this.item1.getName(),
        description: this.item1.getDescription(),
        value: 0,
      });
    } else {
      choices.push(emptyChoices);
    }
    if (this.item2) {
      choices.push({
        name: this.item2.getName(),
        description: this.item2.getDescription(),
        value: 1,
      });
    } else {
      choices.push(emptyChoices);
    }
    if (this.item3) {
      choices.push({
        name: this.item3.getName(),
        description: this.item3.getDescription(),
        value: 2,
      });
    } else {
      choices.push(emptyChoices);
    }
    return choices;
  }
  public toString() {
    if (this.item1 && this.item2 && this.item3) {
      return `Inventory:${this.item1 ? `\n${this.item1.toString()}` : ""}${
        this.item2 ? `\n${this.item2.toString()}` : ""
      }${this.item3 ? `\n${this.item3.toString()}` : ""}`;
    }
    return `Inventory empty.`;
  }
}
