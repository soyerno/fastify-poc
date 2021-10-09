import { RequestBodyDefault, HTTPMethods } from "fastify";
const swaggerRouteOptions = {
  schema: {
    querystring: {
      type: 'object',
      required: ['fields'],
      additionalProperties: false,
      properties: {
        fields: {
          type: 'array',
          items: {
            type: 'string'
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
          collectionFormat: 'multi'
        }
      }
    }
  },
};

export default [
  {
    url: "/currencies/:id",
    method: "GET" as HTTPMethods,
    schema: swaggerRouteOptions.schema,
    handler: async (request: RequestBodyDefault, reply: any) => {
      reply.send({ ping: "pong" });
    },
  },
  {
    url: "/currencies",
    method: "GET" as HTTPMethods,
    schema: swaggerRouteOptions.schema,
    handler: async (request: RequestBodyDefault, reply: any) => {
      reply.send([{ ping: "pong" }, { ping: "pong" }, { ping: "pong" }]);
    },
  },
];
