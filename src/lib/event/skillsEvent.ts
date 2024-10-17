import type SonGohanClass from "../combat/SonGohan.ts";
import CliEventClass from "./CliEvent.ts";

export default class SkillsEventClass implements CliEventClass {
  public update(player: SonGohanClass, type: "hit" | "skill"): void {
    if (type !== "skill") return;
    const isHealthUnlock: boolean = player.getHealthTraining() === 3;
    const isStrengthUnlock: boolean = player.getStrengthTraining() === 3;
    const isKiUnlock: boolean = player.getKiTraining() === 3;
    if (isHealthUnlock) {
      console.log(
        `🏋️ You trained your 💛Health enough, you should focus other training.`,
      );
    }
    if (isStrengthUnlock) {
      console.log(
        `🏋️ You trained your 💪Strength enough, you should focus other training.`,
      );
    }
    if (isKiUnlock) {
      console.log(
        `🏋️ You trained your ⚡️Ki enough, you should focus other training.`,
      );
    }
  }
}
