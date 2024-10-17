import { input } from "@inquirer/prompts";

export default async function pausePrompt(): Promise<void> {
  await input({ message: "" });
}
