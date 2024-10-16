import FighterClass from "../Fighter.ts";
import EnnemyCreatorClass from "./EnnemyCreator.ts";
import HumanFighterClass from "./HumanFighter.ts";

export default class HumanCreatorClass extends EnnemyCreatorClass {
  public ennemyCreator(): FighterClass {
    return new HumanFighterClass("Krilin", 5, 1, 1);
  }
}
