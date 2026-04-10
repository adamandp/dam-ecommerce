import { CategoriesRecomendationRes as CategoriesRes } from "@/types/recomendations-interface";
import { WebResponse as WebRes } from "@/types/common-interface";
import { ProductsRes } from "@/types/products-interface";
import axiosInstance from "@/utils/axios-instance";

export const getRecomendations = {
  categories: async (): Promise<CategoriesRes[]> => {
    return await axiosInstance
      .get<WebRes<CategoriesRes[]>>("/recomendations/categories")
      .then((res) => res.data.data ?? []);
  },
  classic: async (): Promise<ProductsRes[]> => {
    return await axiosInstance
      .get<WebRes<ProductsRes[]>>("/recomendations/classic")
      .then((res) => res.data.data ?? []);
  },
  offers: async (): Promise<ProductsRes[]> => {
    return await axiosInstance
      .get<WebRes<ProductsRes[]>>("/recomendations/offers")
      .then((res) => res.data.data ?? []);
  },
};
