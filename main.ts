import SonGohanClass from "./src/lib/combat/SonGohan.ts";

async function main() {
  const player: SonGohanClass = SonGohanClass.createPlayer();
  console.log(player.toString());
  await player.chooseItems();
  console.log(player.getInventory());
}

main();
