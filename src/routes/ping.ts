import { server } from "..";

server.get("/ping", async (request, reply) => {
  return "pong\n";
});
