import fastify, { RequestBodyDefault } from "fastify";
import { ReplyDefault } from "fastify/types/utils";

export default {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "Test swagger",
      description: "Testing the Fastify swagger API",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "healcheck", description: "Code related end-points", externalDocs: { description: "Find more info here", url: "https://swagger.io" } },
      { name: "currencies", description: "Currencies related end-points", externalDocs: { description: "Find more info here", url: "https://swagger.io" } },
    ],
    // definitions: {
    //   Currency: {
    //     type: "object",
    //     required: ["name", "symbol", "value", "description", "updatedAt"],
    //     properties: {
    //       id: { type: "string", format: "uuid" },
    //       name: { type: "string" },
    //       description: { type: "string" },
    //       symbol: { type: "string" },
    //       value: { type: "Number" },
    //       updatedAt: { type: "Date" },
    //     },
    //   },
    // },
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "apiKey",
        in: "header",
      },
    },
  },
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: (
      request: RequestBodyDefault,
      reply: ReplyDefault,
      next: Function
    ) => {
      next();
    },
    preHandler: (
      request: RequestBodyDefault,
      reply: ReplyDefault,
      next: Function
    ) => {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header: Headers) => header,
  exposeRoute: true,
};
