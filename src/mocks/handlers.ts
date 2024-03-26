import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/user-details", () => {
    return HttpResponse.json({
      user: {
        id: "abc-123",
        name: "John Maverick",
      },
    });
  }),
];
