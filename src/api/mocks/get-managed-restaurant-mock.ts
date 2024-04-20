import { HttpResponse, http } from "msw";

import { GetManagerRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagerRestaurantResponse
>("/managed-restaurant", () => {
  return HttpResponse.json({
    id: "custom-manager-id",
    name: "Pizza shop",
    description: "Restaurant description",
    managerId: "manager-id",
    createdAt: new Date(),
    updatedAt: null,
  });
});
