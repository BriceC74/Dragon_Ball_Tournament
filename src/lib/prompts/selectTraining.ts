import { select } from "@inquirer/prompts";
import type SonGohanClass from "../combat/SonGohan.ts";
import quickWord from "../engine/training/quickWord.ts";
import quiz from "../engine/training/quiz.ts";
import meditation from "../engine/training/meditation.ts";

export default async function selectTraining(player: SonGohanClass) {
  player.regenerateStamina();
  do {
    console.log(`🔋 Stamina left: ${player.getStamina()}`);
    const answer = await select({
      message: "Select a training:",
      choices: [
        {
          name: "Meditation",
          description: "Increases life by 1",
          value: "meditation",
        },
        {
          name: "Quiz",
          description: "Increases Ki by 1",
          value: "quiz",
        },
        {
          name: "Quick Word",
          description: "Increases strength by 1",
          value: "quickWord",
        },
      ],
    });
    let isSuccess = true;
    switch (answer) {
      case "meditation":
        isSuccess = await meditation(player);
        break;
      case "quiz":
        isSuccess = await quiz(player);
        break;
      case "quickWord":
        isSuccess = await quickWord(player);
        break;
    }
    if (!isSuccess) console.log("❌ You failed !");

    player.useStamina();
  } while (player.getStamina() > 0);
}
