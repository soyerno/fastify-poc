import { server } from "..";
import { IQuerystring, IHeaders } from "../types/index";

server.get<{
  Querystring: IQuerystring;
  Headers: IHeaders;
}>(
  "/auth",
  {
    preValidation: (request, reply, done) => {
      const { username, password } = request.query;
      done(username !== "admin" ? new Error("Must be admin") : undefined); // only validate `admin` account
    },
  },
  async (request, reply) => {
    const { username, password } = request.query;
    const customerHeader = request.headers["h-Custom"];
    // do something with request data

    return `logged in as ${username}!`;
  }
);
