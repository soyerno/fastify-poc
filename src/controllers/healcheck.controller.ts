import { RequestBodyDefault } from "fastify";

export default async (request: RequestBodyDefault, reply: any) => {
  return reply.send({
    serviceID: "service:currency-api",
    description: "health of currency api service",
    status: "pass",
    version: "1",
    release_id: "1.0.0",
    memory: process.memoryUsage(),
    cpu: process.cpuUsage(),
    uptime: process.uptime(),
    notes: [""],
  });
};
