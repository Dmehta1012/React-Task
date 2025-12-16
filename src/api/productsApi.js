import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchProducts = async ({ queryKey }) => {
  const [, limit, skip] = queryKey;
  const res = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  return res.data;
};

export const useProducts = (limit, skip) => {
  return useQuery({
    queryKey: ["products", limit, skip],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });
};


const addProduct = async (product) => {
  const res = await axios.post("https://dummyjson.com/products/add", product);
  return res.data;
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
};
