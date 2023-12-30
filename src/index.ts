import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
  .use(swagger())
  .get("/", () => "Hello Elysia", {
    response: t.String({
      description: "String 'Hello Elysia'",
    }),
    detail: {
      description: "Just return 'Hello Elysia'",
      tags: ["hello"],
    },
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export { app };
export type App = typeof app;
