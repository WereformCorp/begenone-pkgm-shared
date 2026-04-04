import he from "he";
import sanitizeHtml from "sanitize-html";

/**
 * Tags allowed for video descriptions (aligned with web DOMPurify HTML profile).
 */
const ALLOWED_TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "br",
  "hr",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "strike",
  "ul",
  "ol",
  "li",
  "a",
  "blockquote",
  "pre",
  "code",
  "span",
  "div",
];

const ALLOWED_ATTRIBUTES = {
  a: ["href", "name", "target", "rel"],
};

/**
 * Decode HTML-escaped markup (e.g. API returns `&lt;p&gt;...`) then sanitize.
 * Mirrors `prepareRichHtmlForDisplay` from Frontend/mfe_shared (without `document`).
 *
 * @param {unknown} raw
 * @returns {string} Safe HTML string for rendering
 */
export function prepareRichHtmlForMobile(raw) {
  let s = raw == null ? "" : String(raw);
  if (!s.trim()) return "";

  if (s.includes("&lt;") || s.includes("&#")) {
    for (let i = 0; i < 4; i++) {
      if (!s.includes("&lt;")) break;
      const next = he.decode(s);
      if (next === s) break;
      s = next;
    }
  }

  return sanitizeHtml(s, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: (_tagName, attribs) => ({
        tagName: "a",
        attribs: {
          ...attribs,
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
    },
  });
}
