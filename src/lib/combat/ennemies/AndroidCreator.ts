import FighterClass from "../Fighter.ts";
import AndroidFighterClass from "./AndroidFighter.ts";
import EnnemyCreatorClass from "./EnnemyCreator.ts";

export default class AndroidCreatorClass extends EnnemyCreatorClass {
  public ennemyCreator(): FighterClass {
    return new AndroidFighterClass("C17", 7, 7, 7);
  }
}
