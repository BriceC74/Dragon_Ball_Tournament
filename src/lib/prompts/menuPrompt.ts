import { confirm, select } from "@inquirer/prompts";
import type SonGohanClass from "../combat/SonGohan.ts";
import endGame from "../engine/EndGame.ts";
import type FighterClass from "../combat/Fighter.ts";

export default async function startMenuPrompt(): Promise<boolean> {
  return await confirm({ message: "New game ?" });
}

export async function fightMenu(
  player: SonGohanClass,
  opponent: FighterClass,
): Promise<boolean> {
  const answer = await select({
    message: "Choose your next action:",
    choices: [
      {
        name: "Physical attack",
        description: `Deal ${player.getStrength()} damage to opponent`,
        value: "pa",
      },
      {
        name: "Ki attack",
        description: `Deal ${player.getKi()} damage to opponent`,
        value: "ka",
      },
      {
        name: "FF",
        description: `Game over bro`,
        value: "ff",
      },
    ],
  });

  switch (answer) {
    case "pa":
      return player.attack("physical", opponent);
    case "ka":
      return player.attack("ki", opponent);
    case "ff":
      endGame();
      break;
  }
  return false;
}
