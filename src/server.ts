"use strict";

import * as Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import helloRoutes from "./routes/helloRoutes";
import logger from "./utils/logger";
export let server: Server;
export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: "0.0.0.0",
  });
  await server.register([helloRoutes]);

  return server;
};

export const start = async function (): Promise<void> {
  logger.info(
    `Starting server, listening on ${server.settings.host}:${server.settings.port}`
  );
  return server.start();
};

process.on("unhandledRejection", (err) => {
  logger.error("unhandledRejection");
  logger.error(err);
  process.exit(1);
});
