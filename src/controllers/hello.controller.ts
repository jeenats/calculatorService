import * as Hapi from "@hapi/hapi";
import Boom from "@hapi/boom";
import logger from "../utils/logger";
import axios from "axios";

/**
 * @description -Hello World
 */
export class HelloController {
  constructor() {}
  public async sayHello(request: Hapi.Request, h: any) {
    try {
      logger.info("Welcome to the controller!");

      logger.info("Calling a thirdparty call before returning");

      let result = await getDetails();

      logger.info(result);

      return h.response(result);
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
}

const getDetails = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
