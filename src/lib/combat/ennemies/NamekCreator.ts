import FighterClass from "../Fighter.ts";
import EnnemyCreatorClass from "./EnnemyCreator.ts";
import NamekFighterClass from "./NamekFighter.ts";

export default class NamekCreatorClass extends EnnemyCreatorClass {
  public ennemyCreator(): FighterClass {
    return new NamekFighterClass("Picolo", 7, 3, 2);
  }
}
