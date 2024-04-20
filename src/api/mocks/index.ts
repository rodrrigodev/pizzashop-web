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
import { getProfileMock } from "./get-profile-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { updateProfileMock } from "./update-profile-mock";
import { getOrdersMock } from "./get-orders-mocks";
import { getOrdersDetailsMock } from "./get-order-details-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdensAmountMock,
  getMonthOrdensAmountMock,
  getMonthCanceledOrdensAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrdersDetailsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
