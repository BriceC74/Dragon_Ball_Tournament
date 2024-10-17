import { createPrompt, usePrefix, useKeypress } from "@inquirer/core";
import type SonGohanClass from "../../combat/SonGohan.ts";

export default async function meditation(
  player: SonGohanClass,
): Promise<boolean> {
  let goodAnwser = false;
  const millisecondes: number = (Math.ceil(Math.random() * (7 - 3)) + 3) * 1000;
  const loader = createPrompt((_config, done: (value: void) => void) => {
    const prefix = usePrefix({ status: "loading" });

    const timeout = setTimeout(() => {
      goodAnwser = true;
      done();
    }, millisecondes);

    useKeypress(() => {
      clearTimeout(timeout);
      done();
    });

    return `${prefix} Simply... Breath....`;
  });
  await loader({});
  if (goodAnwser) {
    player.addHealth();
    player.rest();
    console.log(`⬆️ Gohan 💛Health increased by 1`);
    return true;
  }
  return false;
}
