import { api } from "@/lib/axios";

interface UpdateProfileProps {
  name: string;
  description: string;
}

export async function updateProfile({ name, description }: UpdateProfileProps) {
  throw new Error("Not implemented");

  await api.put("/profile", {
    name,
    description,
  });
}
