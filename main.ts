// @ts-nocheck Expected player
import type SonGohanClass from "./src/lib/combat/SonGohan.ts";
import SonGohanSsjClass from "./src/lib/combat/SonGohanSSJ.ts";
import { gameWin } from "./src/lib/engine/EndGame.ts";
import fight from "./src/lib/engine/Fight.ts";
import startGame from "./src/lib/engine/StartGame.ts";
import TournamentContextClass from "./src/lib/engine/tournament/TournamentContext.ts";
import { gohanSsjAscii } from "./src/lib/prompts/fightersAscii.ts";
import selectTraining from "./src/lib/prompts/selectTraining.ts";
import useItem from "./src/lib/prompts/useItem.ts";

async function main() {
  let player: SonGohanClass = await startGame();
  const tournamentRound = new TournamentContextClass();
  do {
    await useItem(player);
    await selectTraining(player);
    if (player.ssjUnlock()) {
      gohanSsjAscii();
      console.log(`🔥 You unlocked Gohan's Super Saiyan form !`);
      player = new SonGohanSsjClass(player);
    }
    player.getKiTraining();
    tournamentRound.battle();
    await fight(player, tournamentRound.getRound() - 1);
    tournamentRound.training();
  } while (tournamentRound.getRound() < 3);
  gameWin();
}

main();
