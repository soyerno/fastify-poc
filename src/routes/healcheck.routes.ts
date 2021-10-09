import { HTTPMethods } from "fastify";
import healcheckController from '../controllers/healcheck.controller';

export const route = {
  url: "/",
  method: "GET" as HTTPMethods,
  handler: healcheckController,
};
