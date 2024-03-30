import { api } from "@/lib/axios";

export interface GetOrdeDetailsParams {
  orderId: string;
}

export interface GetOrderDetailsResponse {
  id: string;
  createdAt: Date;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    };
  }[];
}

export async function getOrderDetails({ orderId }: GetOrdeDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`);

  return response.data;
}
