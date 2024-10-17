import clearScreen from "../prompts/clearScreen.ts";
import startMenuPrompt from "../prompts/menuPrompt.ts";
import endGame from "./EndGame.ts";
import { gohanAscii } from "../prompts/fightersAscii.ts";
import { confirm } from "@inquirer/prompts";
import SonGohanClass from "../combat/SonGohan.ts";
import pausePrompt from "../prompts/pausePrompt.ts";
import HitEventClass from "../event/HitEvent.ts";
import SkillsEventClass from "../event/skillsEvent.ts";
import displayAsset from "./displayAsset.ts";

export default async function startGame() {
  clearScreen();
  title();
  const isNewGame = await startMenuPrompt();

  clearScreen();
  if (!isNewGame) endGame();

  const player: SonGohanClass = SonGohanClass.createPlayer();

  const hitEvent: HitEventClass = new HitEventClass();
  player.attach(hitEvent);

  gameDescription();
  await pausePrompt();
  await player.chooseItems();

  let answer = await confirm({
    message: "“What the point of training ?“ you ask ?",
  });
  if (!answer) console.log("Anyway 👀");
  await trainingDescription(player);
  const skillsEvent: SkillsEventClass = new SkillsEventClass();
  player.attach(skillsEvent);

  return player;
}

export function title() {
  displayAsset("title.txt");
}

export function gameDescription(): void {
  gohanAscii();
  console.log(
    `You play Son Gohan as he takes part in the famous Tenkaichi Budōkai.
You'll be up against 3 formidable opponents! Each with their own speciality.

Before each fight, you can train 3 times.

To help you, you can choose three objects.
You can use one of them before each training session.
(That is, if you win your fights...)
`,
  );
}

export async function trainingDescription(
  player: SonGohanClass,
): Promise<void> {
  console.log("These are your skills:");
  console.log(player.toString());
  await pausePrompt();
  console.log("I'll coach you this time ! 🏋️");
}
