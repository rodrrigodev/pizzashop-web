import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdensAmountMock } from "./get-day-ordens-amount";
import { getMonthOrdensAmountMock } from "./get-month-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { getPopularProductsMock } from "./get-popular-products";
import { getMonthCanceledOrdensAmountMock } from "./get-month-canceled-orders-amount";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdensAmountMock,
  getMonthOrdensAmountMock,
  getMonthCanceledOrdensAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
