import { Template, waitForPort } from "e2b";

export const Portfoliotemplate: any = Template()
  .fromTemplate("mcp-gateway")
  .addMcpServer("filesystem")
  .runCmd("curl -fsSL https://code-server.dev/install.sh | sh")
  .gitClone("https://github.com/Aetrix-ai/e2b_scripts")
  .setWorkdir("/home/user/e2b_scripts/portfolio-starter")
  .runCmd("npm install")
  .runCmd("npm run build")
  .setStartCmd("code-server --bind-addr 0.0.0.0:8080 --auth none .", waitForPort(8080));
  
// Runtime commands



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