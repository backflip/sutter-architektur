import { renderLandingPage } from "../src/render";
import { getLandingPage } from "../src/data";

module.exports = async (req, res) => {
  const data = await getLandingPage();
  const html = renderLandingPage(data);

  res.send(html);
};
