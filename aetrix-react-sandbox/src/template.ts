import { Template, waitForPort } from "e2b";

export const Portfoliotemplate: any = Template()
  .fromTemplate("mcp-gateway")
  .addMcpServer("filesystem")
  .runCmd("curl -fsSL https://code-server.dev/install.sh | sh")
  .gitClone("https://github.com/Aetrix-ai/e2b_scripts")
  .runCmd("cd e2b_scripts/portfolio-starter && npm install")
  .runCmd("cd e2b_scripts/portfolio-starter && npm run build")
  .setStartCmd("cd e2b_scripts/portfolio-starter && code-server --bind-addr 0.0.0.0:8080 --auth none .", waitForPort(8080));
// Runtime commands
``


export const EnvOnly: any = Template()
  .fromTemplate("mcp-gateway")
  .addMcpServer("filesystem")
  .runCmd("curl -fsSL https://code-server.dev/install.sh | sh")
  .runCmd("mkdir Workspace")
  .setStartCmd("cd Workspace && code-serve --bind-addr 0.0.0.0:8080 --auth none .", waitForPort(8080));
// Runtime commands
export const templates: {
  name: string,
  template: any
}[] = [
  {
    name: "portfolio",
    template: Portfoliotemplate

  }, {
    name: "zero",
    template: EnvOnly
  }
]