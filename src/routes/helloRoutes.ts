import * as Hapi from "@hapi/hapi";
import { HelloController } from "../controllers/hello.controller";

// create instance of controller
const crtController = new HelloController();
// configure the routes
const helloRoutes = {
  name: "Hello Routes",
  register: async (server: Hapi.Server) => {
    server.route([
      {
        method: "GET",
        path: "/calculator/hello",
        handler: crtController.sayHello,
        options: {
          tags: ["api"],
        },
      },
    ]);
  },
};

export default helloRoutes;
