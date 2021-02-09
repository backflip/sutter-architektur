import { createClient } from "contentful";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const {
  CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_ENTRY,
} = process.env;

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export async function getLandingPage() {
  const { fields } = await client.getEntry(CONTENTFUL_ENTRY);
  const data = {
    title: fields.title,
    content: documentToHtmlString(fields.text, {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) =>
          `<p>${next(node.content).replace(/\n/g, "<br>")}</p>`,
      },
    }),
  };

  return data;
}
