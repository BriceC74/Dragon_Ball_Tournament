import * as fs from "node:fs";
import * as path from "node:path";

export default function displayAsset(fileName: string): void {
  const fileString: string = fs.readFileSync(
    path.join(Deno.cwd(), "src", "assets", fileName),
    { encoding: "utf-8" },
  );

  console.log(fileString);
}
