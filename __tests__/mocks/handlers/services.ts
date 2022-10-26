import { rest } from "msw";
import { service } from "./service";

export const services = [service];

export const servicesHandlers = [
  rest.get("http://localhost:7070/api/services", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(services));
  }),
];
