import { describe, expect, it } from "bun:test";
import { edenTreaty } from "@elysiajs/eden";
import { app, App } from "./index";

describe("Elysia", () => {
  it("return a response", async () => {
    const response = await app
      .handle(new Request("http://localhost/"))
      .then(async (res) => res.text());

    expect(response).toBe("Hello Elysia");
  });
});

// const api = edenTreaty<App>("http://localhost:3000");

// describe("Tests", () => {
//   it("return default response", async () => {
//     const { data } = await api.get();

//     expect(data).toBe("Hello Elysia");
//   });
// });
