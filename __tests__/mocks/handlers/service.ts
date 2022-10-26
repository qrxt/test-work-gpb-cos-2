import { rest } from "msw";

export const id = "test-id-1";
export const service = {
  id: id,
  name: "Service#1",
  price: 10000,
  content: "Service#1 description",
};

export const errorResponseId = "test-error";

export const serviceHandlers = [
  rest.get(`http://localhost:7070/api/services/${id}`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(service));
  }),

  rest.get(
    `http://localhost:7070/api/services/${errorResponseId}`,
    (_, res, ctx) => {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: `Service ${errorResponseId} not found`,
        })
      );
    }
  ),
];
