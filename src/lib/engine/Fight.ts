import AndroidCreatorClass from "../combat/ennemies/AndroidCreator.ts";
import type AndroidFighterClass from "../combat/ennemies/AndroidFighter.ts";
import HumanCreatorClass from "../combat/ennemies/HumanCreator.ts";
import type HumanFighterClass from "../combat/ennemies/HumanFighter.ts";
import NamekCreatorClass from "../combat/ennemies/NamekCreator.ts";
import type NamekFighterClass from "../combat/ennemies/NamekFighter.ts";
import type FighterClass from "../combat/Fighter.ts";
import type SonGohanClass from "../combat/SonGohan.ts";
import clearScreen from "../prompts/clearScreen.ts";
import { fightMenu } from "../prompts/menuPrompt.ts";

export default async function fight(
  player: SonGohanClass,
  roundNumber: number,
) {
  const opponent: ((player: SonGohanClass) => Promise<void>)[] = [
    humanFight,
    namekFight,
    androidFight,
  ];

  await opponent[roundNumber](player);
}

async function humanFight(player: SonGohanClass): Promise<void> {
  const opponentCreator: HumanCreatorClass = new HumanCreatorClass();
  const opponent: HumanFighterClass = opponentCreator.ennemyCreator();
  await turnLoop(player, opponent);
}
async function namekFight(player: SonGohanClass): Promise<void> {
  const opponentCreator: NamekCreatorClass = new NamekCreatorClass();
  const opponent: NamekFighterClass = opponentCreator.ennemyCreator();
  await turnLoop(player, opponent);
}
async function androidFight(player: SonGohanClass): Promise<void> {
  const opponentCreator: AndroidCreatorClass = new AndroidCreatorClass();
  const opponent: AndroidFighterClass = opponentCreator.ennemyCreator();
  await turnLoop(player, opponent);
}

async function turnLoop(
  player: SonGohanClass,
  opponent: FighterClass,
): Promise<void> {
  let isOpponentFighting: boolean = true;
  do {
    clearScreen();
    console.log(opponent.toString());
    console.log(player.toString());
    isOpponentFighting = !(await fightMenu(player, opponent));
    if (isOpponentFighting) opponentAction(opponent, player);
  } while (isOpponentFighting);
  displayAsset();
}

function opponentAction(opponent: FighterClass, player: SonGohanClass) {
  const randNum: number = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 1:
      opponent.attack("ki", player);
      break;
    case 2:
      opponent.specialAttack(player);
      break;
    default:
      opponent.attack("physical", player);
      break;
  }
}

function displayAsset() {
  console.log(`
╔───────────────────────────────────────────────────────────────────╗
│██╗   ██╗ ██████╗ ██╗   ██╗    ██╗    ██╗ ██████╗ ███╗   ██╗    ██╗│
│╚██╗ ██╔╝██╔═══██╗██║   ██║    ██║    ██║██╔═══██╗████╗  ██║    ██║│
│ ╚████╔╝ ██║   ██║██║   ██║    ██║ █╗ ██║██║   ██║██╔██╗ ██║    ██║│
│  ╚██╔╝  ██║   ██║██║   ██║    ██║███╗██║██║   ██║██║╚██╗██║    ╚═╝│
│   ██║   ╚██████╔╝╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║ ╚████║    ██╗│
│   ╚═╝    ╚═════╝  ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═══╝    ╚═╝│
╚───────────────────────────────────────────────────────────────────╝
`);
}
