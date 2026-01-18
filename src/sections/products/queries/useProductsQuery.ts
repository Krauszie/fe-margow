import { useQuery } from "@tanstack/vue-query";
import { productsService } from "@/services/products.service";

export function useProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productsService.getProducts(),
  });
}
