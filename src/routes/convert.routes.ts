import { RequestBodyDefault, HTTPMethods } from "fastify";
import converController from "../controllers/currency-converter.controller";
const swaggerRouteOptions = {
  schema: {
    querystring: {
      type: "object",
      required: ["base", "amount"],
      additionalProperties: false,
      properties: {
        fields: {
          type: "array",
          items: {
            type: "string",
          },
          minItems: 1,
          //
          // Note that this is an Open API version 2 configuration option.  The
          // options changed in version 3. The plugin currently only supports
          // version 2 of Open API.
          //
          // Put `collectionFormat` on the same property which you are defining
          // as an array of values. (i.e. `collectionFormat` should be a sibling
          // of the `type: "array"` specification.)
          collectionFormat: "multi",
        },
      },
    },
  },
};

export default {
  url: "/convert",
  method: "GET" as HTTPMethods,
  handler: converController,
};
