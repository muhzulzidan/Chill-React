import { createServer } from "json-server";
import path from "path";

const server = createServer({
  root: path.join(process.cwd(), "db.json"),
});

export default function handler(req, res) {
  server(req, res);
}