import { useQuery } from "@tanstack/vue-query";
import { articlesService } from "@/services/articles.service";

export function useArticlesQuery() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => articlesService.getArticles(),
  });
}
