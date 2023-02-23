import * as Hapi from "@hapi/hapi";
import { CalculatorController } from "../controllers/calculator.controller";

// create instance of controller
const calculatorController = new CalculatorController();
// configure the routes
const calcultaorRoutes = {
  name: "Calculator Routes",
  register: async (server: Hapi.Server) => {
    server.route([
      {
        method: "GET",
        path: "/calculator/add",
        handler: calculatorController.sayHello,
        options: {
          tags: ["api"],
        },
      },
    ]);
  },
};

export default calcultaorRoutes;
