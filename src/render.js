import ejs from "ejs";
import fs from "fs";
import path from "path";

const templatePath = path.join(__dirname, "./index.html");
const template = fs.readFileSync(templatePath, "utf8");

export function renderLandingPage(data = {}) {
  // Workaround for apparent timing/discovery issue when resolving include paths
  console.log(fs.existsSync(path.join(__dirname, "./analytics.html")));

  const html = ejs.render(template, data, {
    views: [__dirname],
  });

  return html;
}
