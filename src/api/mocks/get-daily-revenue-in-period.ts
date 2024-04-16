import { HttpResponse, http } from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "08-01/2022", receipt: 2000 },
    { date: "09-01/2022", receipt: 300 },
    { date: "10-01/2022", receipt: 4000 },
    { date: "11-01/2022", receipt: 6000 },
  ]);
});
