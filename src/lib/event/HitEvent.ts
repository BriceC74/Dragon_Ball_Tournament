import type SonGohanClass from "../combat/SonGohan.ts";
import { gameOver } from "../engine/EndGame.ts";
import clearScreen from "../prompts/clearScreen.ts";
import CliEventClass from "./CliEvent.ts";

export default class HitEventClass implements CliEventClass {
  public update(player: SonGohanClass, type: "hit" | "skill"): void {
    if (type !== "hit") return;
    if (player.getActualHealth() < 1) {
      clearScreen();
      console.log(`${player.toStringHealth()}\nYou are Knock Out.`);
      gameOver();
    }
    console.log(`You were hit :\n${player.toStringHealth()}`);
  }
}
