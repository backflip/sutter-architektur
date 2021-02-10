import { renderLandingPage } from "../src/render";
import { getLandingPage } from "../src/data";

const { FATHOM_SITE_ID } = process.env;

module.exports = async (req, res) => {
  const data = await getLandingPage();
  const html = renderLandingPage({
    ...data,
    fathomSiteId: FATHOM_SITE_ID,
  });

  res.send(html);
};
