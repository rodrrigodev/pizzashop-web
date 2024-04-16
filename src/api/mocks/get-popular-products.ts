import { HttpResponse, http } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    { product: "Pizza Calabresa", amount: 45 },
    { product: "Pizza Camarão", amount: 25 },
    { product: "Pizza Chocolate", amount: 8 },
    { product: "Pizza Carne Seca", amount: 18 },
    { product: "Pizza Morango", amount: 10 },
  ]);
});
