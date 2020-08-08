import request from "supertest";
import index from "../src/index";

describe("GET petitions", () => {
  it("monsters should return 200 OK", () => {
    return request(index)
      .get("/monsters")
      .expect(200);
  });

  it("monsters/Rathalos should return 200 OK", () => {
    return request(index)
      .get("/monsters/Rathalos")
      .expect(200);
  });

  it("/armors should return 200 OK", () => {
    return request(index)
      .get("/armors")
      .expect(200);
  });

  it("/weapons should return 200 OK", () => {
    return request(index)
      .get("/weapons")
      .expect(200);
  });
});
