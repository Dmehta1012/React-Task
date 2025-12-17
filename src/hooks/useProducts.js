import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/PostApi";

export const useProducts = (limit, skip) => {
  return useQuery({
    queryKey: ["products", limit, skip],
    queryFn: async () => {
      const res = await getProducts(limit, skip);
      return res.data;
    },
    keepPreviousData: true,
  });
};
