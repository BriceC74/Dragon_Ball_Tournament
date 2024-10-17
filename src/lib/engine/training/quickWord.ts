import { input } from "@inquirer/prompts";
import type SonGohanClass from "../../combat/SonGohan.ts";

export default async function quickWord(
  player: SonGohanClass,
): Promise<boolean> {
  const dbNames: string[] = [
    "Piccolo",
    "Krilin",
    "Vegeta",
    "Goku",
    "Goten",
    "Trunks",
    "Bulma",
    "Yamcha",
    "Mr. Satan",
    "Videl",
    "C16",
    "C17",
    "C18",
    "Broly",
    "Freezer",
    "Cooler",
  ];

  let goodAnswer: number = 0;
  for (let i = 0; i < 3; i++) {
    const randNum: number = Math.floor(Math.random() * dbNames.length);

    const word: string = dbNames[randNum];

    const answer = await input(
      { message: `Write “${word}“ ! 4s` },
      { signal: AbortSignal.timeout(4000) },
    ).catch((error) => {
      if (error.name === "AbortPromptError") {
        return "false";
      }
    });

    if (answer === "false" || answer !== word) break;
    goodAnswer++;
  }
  if (goodAnswer === 3) {
    player.addStrength();
    console.log("⬆️ Gohan 💪strength increased by 1");
    return true;
  }

  return false;
}
