import { api } from "@/lib/axios";

export interface UpdateProfileBody {
  name: string;
  description: string;
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  // throw new Error("Not implemented");

  await api.put("/profile", {
    name,
    description,
  });
}
