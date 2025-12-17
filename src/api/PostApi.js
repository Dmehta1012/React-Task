import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = (limit = 10, skip = 0) =>
  api.get(`/products?limit=${limit}&skip=${skip}`);

export const addProduct = (product) =>
  api.post("/products/add", product);

export const updateProduct = (id, product) =>
  api.put(`/products/${id}`, product);

export const deleteProduct = (id) =>
  api.delete(`/products/${id}`);

