import http from "./http";
import type { Product } from "@/sections/products/products.types";

export const productsService = {
  async getProducts(): Promise<Product[]> {
    const response = await http.get<Product[]>("/products");
    return response.data;
  },

  async getProductById(id: number): Promise<Product> {
    const response = await http.get<Product>(`/products/${id}`);
    return response.data;
  },
};
