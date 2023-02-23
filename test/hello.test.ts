import { Server } from "@hapi/hapi";
import { init } from "../src/server";

describe("smoke test", () => {
  let server: Server;

  beforeEach((done) => {
    init().then((s) => {
      server = s;
      done();
    });
  });
  afterEach((done) => {
    server.stop().then(() => done());
  });

  test("index responds", async () => {
    const res = await server.inject({
      method: "get",
      url: "/ob/hello",
    });
    expect(res.statusCode).toEqual(200);
  });
});
