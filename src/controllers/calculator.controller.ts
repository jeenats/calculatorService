import * as Hapi from "@hapi/hapi";
import Boom from "@hapi/boom";
import logger from "../utils/logger";

/**
 * @description -Hello World
 */
export class CalculatorController {
  constructor() {}
  public async add(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      logger.info("Welcome to the calculator controller!");

      return h.response("I am from addition !!!.");
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
  public async substract(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      logger.info("Welcome to the calculator controller!");

      return h.response("I am from substraction !!!.");
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
  public async multify(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      const { a, b }: any = request.payload;
      logger.info("paylod", a);

      return h.response(String(a * b));
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
}
