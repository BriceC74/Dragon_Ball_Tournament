import type SonGohanClass from "../combat/SonGohan.ts";
import CliEventClass from "./CliEvent.ts";

export default class HitEventClass implements CliEventClass {
  public update(player: SonGohanClass): void {
    console.log(`You were hit :\n${player.toStringHealth()}`);
  }
}
