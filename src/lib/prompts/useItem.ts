import { select } from "@inquirer/prompts";
import type SonGohanClass from "../combat/SonGohan.ts";

export default async function useItem(player: SonGohanClass): Promise<void> {
  const inventory = player.getInventory();
  if (!inventory) return;

  const choices: any[] | undefined = inventory.asChoices();
  if (choices[0]) {
    const answerIndex: 0 | 1 | 2 = await select({
      message: "Choose an item to consume:",
      choices,
    });
    const item = inventory.getItem(answerIndex);
    if (item) {
      item.action(player);
      inventory.removeItem(answerIndex);
    }
  }
}
