import displayAsset from "./displayAsset.ts";

export default function endGame(): void {
  Deno.exit();
}

export function gameOver(): void {
  displayAsset("game_over.txt");
  endGame();
}

export function gameWin(): void {
  displayAsset("win.txt");
  endGame();
}
