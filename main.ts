import { select } from "@inquirer/prompts";

async function main() {
  await select({ message: "testing", choices: [] });
}

main();
