import { createServer } from "./server.mjs";

const server = createServer();

const PORT = 3000;
const HOST = "0.0.0.0";

server.listen(PORT, HOST, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Serveur démarré sur http://${HOST}:${PORT}`);
  }
});