import { CategoriesRecomendationRes as CategoriesRes } from "@/types/recomendations-interface";
import { WebResponse as WebRes } from "@/types/common-interface";
import { ProductRes } from "@/types/product-res";
import axiosInstance from "@/utils/axios-instance";

export const getRecomendations = {
  categories: async (): Promise<CategoriesRes[]> => {
    return await axiosInstance
      .get<WebRes<CategoriesRes[]>>("/recomendations/categories")
      .then((res) => res.data.data ?? []);
  },
  classic: async (): Promise<ProductRes[]> => {
    return await axiosInstance
      .get<WebRes<ProductRes[]>>("/recomendations/classic")
      .then((res) => res.data.data ?? []);
  },
  offers: async (): Promise<ProductRes[]> => {
    return await axiosInstance
      .get<WebRes<ProductRes[]>>("/recomendations/offers")
      .then((res) => res.data.data ?? []);
  },
};
