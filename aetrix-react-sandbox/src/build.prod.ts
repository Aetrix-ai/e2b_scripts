import "dotenv/config";
import { Template, defaultBuildLogger } from "e2b";
import { templates } from "./template";

async function main() {
  templates.forEach(async (t) => {
    try {
      Template.build(t.template, {
        alias: t.template,
        cpuCount: 8,
        memoryMB: 8192,
        onBuildLogs: defaultBuildLogger(),
      });
    } catch (e) {
      console.error(e)
    }
  })
}

main().catch(console.error);
