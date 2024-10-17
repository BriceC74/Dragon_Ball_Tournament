import SonGohanClass from "./src/lib/combat/SonGohan.ts";
import TournamentContextClass from "./src/lib/engine/tournament/TournamentContext.ts";

async function main() {
  const player: SonGohanClass = SonGohanClass.createPlayer();
  console.log(player.toString());
  //await player.chooseItems();

  //const ennemy = new HumanCreatorClass();
  //console.log(ennemy.ennemyCreator());
  //console.log(ennemy.specialAttack());

  const tournamentContext = new TournamentContextClass();
  console.log(tournamentContext);
  tournamentContext.battle();
  console.log(tournamentContext);
  tournamentContext.training();
  console.log(tournamentContext);
}

main();
