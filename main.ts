import SonGohanClass from "./src/lib/combat/SonGohan.ts";
import SonGohanSsjClass from "./src/lib/combat/SonGohanSSJ.ts";

async function main() {
  const player: SonGohanClass = SonGohanClass.createPlayer();
  console.log(player.toString());
  //await player.chooseItems();

  //const ennemy = new HumanCreatorClass();
  //console.log(ennemy.ennemyCreator());
  //console.log(ennemy.specialAttack());

  //const tournamentContext = new TournamentContextClass();
  //console.log(tournamentContext);
  //tournamentContext.battle();
  //console.log(tournamentContext);
  //tournamentContext.training();
  //console.log(tournamentContext);

  const sgssj = new SonGohanSsjClass(player);
  console.log(sgssj.toString());
}

main();
