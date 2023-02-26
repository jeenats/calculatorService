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
        handler: calculatorController.add,
        options: {
          tags: ["api"],
        },
      },
      {
        method: "GET",
        path: "/calculator/substract",
        handler: calculatorController.substract,
        options: {
          tags: ["api"],
        },
      },
    ]);
  },
};

export default calcultaorRoutes;
