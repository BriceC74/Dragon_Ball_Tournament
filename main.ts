import SonGohanClass from "./src/lib/combat/SonGohan.ts";

async function main() {
  const player: SonGohanClass = SonGohanClass.createPlayer();
  console.log(player.toString());
  //await player.chooseItems();

  //const ennemy = new HumanCreatorClass();
  //console.log(ennemy.ennemyCreator());
  //console.log(ennemy.specialAttack());
}

main();
