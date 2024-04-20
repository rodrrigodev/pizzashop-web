import { HttpResponse, http } from "msw";

import {
  GetOrderDetailsResponse,
  GetOrdeDetailsParams,
} from "../get-order-details";

export const getOrdersDetailsMock = http.get<
  GetOrdeDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johnDoe@email.com",
      phone: "123456789",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 9000,
    orderItems: [
      {
        id: "Order-item-1",
        priceInCents: 6000,
        product: { name: "Pizza Camarão" },
        quantity: 1,
      },
      {
        id: "Order-item-2",
        priceInCents: 3000,
        product: { name: "Pizza Frango" },
        quantity: 2,
      },
    ],
  });
});
