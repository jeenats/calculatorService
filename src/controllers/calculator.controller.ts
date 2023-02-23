import * as Hapi from "@hapi/hapi";
import Boom from "@hapi/boom";
import logger from "../utils/logger";

/**
 * @description -Hello World
 */
export class CalculatorController {
  constructor() {}
  public async sayHello(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      logger.info("Welcome to the calculator controller!");
      return h.response("Hello !!!.");
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
}
