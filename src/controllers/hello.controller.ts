import * as Hapi from "@hapi/hapi";
import Boom from "@hapi/boom";
import logger from '../utils/logger'


/**
 * @description -Hello World
 */
export class HelloController {
  constructor() {}
  public async sayHello(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      logger.info('Welcome to the controller!');
      return h.response('Hello team!!!.');
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
}
