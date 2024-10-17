import type SonGohanClass from "../combat/SonGohan.ts";

export default abstract class CliEventClass {
  public abstract update(player: SonGohanClass): void;
}
