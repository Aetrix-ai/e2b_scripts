import "dotenv/config";
import { Template, defaultBuildLogger } from "e2b";
import { templates } from "./template";

async function main() {
  const count = templates.length;
  console.log(`Total = ${count}`);
  const success: string[] = []
  const failed: string[] = []

  for (let i = 0; i < count; i++) {
    const t = templates[i];

    if (!t) continue
    const alias = `aetrix-dev-${t.name}`;

    console.log(`\n\n \tNo [${i + 1} / ${count}] Building [${alias}]\n`);

    try {
      await Template.build(t.template, {
        alias,
        cpuCount: 8,
        memoryMB: 8192,
        onBuildLogs: defaultBuildLogger(),
      });
      success.push(t.name)
    } catch (e) {
      failed.push(t.name)
      console.error(`❌ Build failed for ${alias}`, e);

    }
  }

  console.log(`\n \t Build success [${success.length} / ${count}]`)
  if (failed.length > 0) {
    console.error(`\n \t Build fail [${failed.length} / ${count}]`)
  }

}

main().catch(console.error);
