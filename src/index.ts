import fastify from "fastify";
import * as routes from "./routes";
import * as modules from "./modules";

export const server = fastify({ logger: true });

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
