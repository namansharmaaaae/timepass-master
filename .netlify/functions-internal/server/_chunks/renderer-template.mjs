import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Lovable App</title>\n  <link rel="stylesheet" href="/assets/styles-ot43kvDC.css"></head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/assets/index-C1OFGWat.js"><\/script>\n  </body>\n</html>', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
