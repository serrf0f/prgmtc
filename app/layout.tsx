import { Style } from "hono/css";
import { html } from "hono/html";
import alpinejs from "../dist/alpinejs.dep";
import styles from "../dist/main.css";

const stylesRelativePath = getDepRelativePath(styles);
const alpinejsRelativePath = getDepRelativePath(alpinejs);

export default async function ({
  children,
  className,
  description,
  lang,
  title,
}: {
  children: Children;
  className?: string;
  description?: string;
  lang?: string;
  title: string;
}) {
  return html`
<html lang="${lang ?? "en"}">
  <head>
    <meta charSet="utf-8">
    <title>${title}</title>
    <meta name="description" content="${description ?? title}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${stylesRelativePath}">
    ${<Style />}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <script
      defer
      src="${alpinejsRelativePath}"
      type="text/javascript"
    ></script>
  </head>
  <body class="${className ?? ""}">
    ${children}
  </body>
</html>
`;
}

function getDepRelativePath(dep: string) {
  return import.meta.env.NODE_ENV === "development"
    ? dep.replace(import.meta.env.PWD as string, "")
    : dep.startsWith(".")
      ? dep.substring(1)
      : dep;
}
