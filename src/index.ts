import fastify from "fastify";
import { route as healCheckRoutes } from "./routes/healcheck.routes";
import { route as authRoutes } from "./routes/auth.routes";
import currencyRoutes from "./routes/currencies.routes";
import convertRoutes from "./routes/convert.routes";

import FastifySwaggerConfig from "./modules/swagger";
import fastifySwagger from "fastify-swagger";

export const server = fastify({ logger: true });
const PORT : string|number = process.env.PORT || 8080;

const routes = [healCheckRoutes, authRoutes, currencyRoutes, convertRoutes];

routes.forEach((route) => {
  Array.isArray(route)
    ? route.forEach((subRoute) => {
        server.route(subRoute);
      })
    : server.route(route);
});

server.register(fastifySwagger as any, FastifySwaggerConfig);

const start = async () => {
  server.listen(PORT, '0.0.0.0', (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });

  server.ready((err) => {
    if (err) throw err;
    server.swagger();
  });
};

start();
