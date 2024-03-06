import { type Context, Hono } from "hono";
import { serveStatic } from "hono/bun";
import { renderToReadableStream } from "hono/jsx/streaming";
import { secureHeaders } from "hono/secure-headers";
import { About } from "./about";
import { Home } from "./home";

const app = new Hono();
app.use(
  secureHeaders({
    xContentTypeOptions: "False",
  }),
);
app.use("/dist/*", serveStatic({ root: "./" }));
app.use("/public/*", serveStatic({ root: "./" }));
app.get("/", (c) => streamHtml(c, <Home />));
app.get("/about", (c) => streamHtml(c, <About />));
app.get("*", (c) =>
  c.req.path.startsWith("/$bunfs/root/")
    ? new Response(Bun.file(c.req.path.replaceAll("/..", "/")))
    : new Response(null, { status: 404 }),
);

function streamHtml(c: Context, jsx: JSX.Element) {
  return c.body(renderToReadableStream(jsx), {
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Transfer-Encoding": "chunked",
    },
  });
}

export default app;
