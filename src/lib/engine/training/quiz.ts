import { select } from "@inquirer/prompts";
import type SonGohanClass from "../../combat/SonGohan.ts";

export default async function quiz(player: SonGohanClass): Promise<boolean> {
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
    const randomNumber1: number = Math.floor(Math.random() * dbNames.length);
    const randomNumber2: number = Math.floor(Math.random() * dbNames.length);

    const choices: string[] = [];
    if (randomNumber1 < randomNumber2) {
      choices.push(dbNames[randomNumber1]);
      choices.push(dbNames[randomNumber2]);
    } else {
      choices.push(dbNames[randomNumber2]);
      choices.push(dbNames[randomNumber1]);
    }

    const posIndex: number = Math.floor(Math.random() * 3);
    choices.splice(posIndex, 0, "Gohan");

    const answer = await select({
      message: "Who has the best character development?",
      choices,
    });
    if (answer !== "Gohan") break;
    goodAnswer++;
  }
  if (goodAnswer === 3) {
    player.addKi();
    console.log("⬆️ Gohan ⚡️ki was increased by 1");
    return true;
  }
  return false;
}
