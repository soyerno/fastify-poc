import { IQuerystring, IHeaders } from "../types/index";
import { RequestBodyDefault, HTTPMethods } from "fastify";

export const route = {
  url: "/auth",
  method: "GET" as HTTPMethods,
  // schema: {
  //   username: String,
  //   password: String,
  // },
  preValidation: (request: any, reply: any, done: any) => {
    const { username, password } = request.query;
    done(username !== "admin" ? new Error("Must be admin") : undefined); // only validate `admin` account
  },
  handler: async (request: any, reply: any) => {
    const { username, password } = request.query;
    const customerHeader = request.headers["h-Custom"];
    // do something with request data

    reply.send({ user: `logged in as ${username}!` });
  },
};