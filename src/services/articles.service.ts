import http from "./http";
import type { Article } from "@/sections/articles/articles.types";

export const articlesService = {
  async getArticles(): Promise<Article[]> {
    const response = await http.get<Article[]>("/articles");
    return response.data;
  },

  async getArticleById(id: number): Promise<Article> {
    const response = await http.get<Article>(`/articles/${id}`);
    return response.data;
  },
};
