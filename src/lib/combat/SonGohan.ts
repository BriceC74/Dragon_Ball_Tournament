import type CliEvent from "../event/CliEvent.ts";
import FighterClass from "./Fighter.ts";

export default class SonGohanClass extends FighterClass {
  private static sonGohan: SonGohanClass;
  private observers: CliEvent[] = [];

  private constructor() {
    super("Son Gohan", 5, 1, 1);
  }

  static createPlayer() {
    this.sonGohan ??= new SonGohanClass();
    return this.sonGohan;
  }

  attach(observer: CliEvent) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }
  detach(observer: CliEvent) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex > -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify() {
    for (let i = 0; i < this.observers.length; i++) {
      const observer = this.observers[i];
      observer.update(this);
    }
  }
}
