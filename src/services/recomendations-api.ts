import {
  CategoriesRecomendationRes as CategoriesRes,
  ProductRecomendationRes,
} from "@/types/recomendations-interface";
import { WebResponse as WebRes } from "@/types/common-interface";
import axiosInstance from "@/utils/axios-instance";

export const getRecomendations = {
  categories: async (): Promise<CategoriesRes[]> => {
    return await axiosInstance
      .get<WebRes<CategoriesRes[]>>("/recomendations/categories")
      .then((res) => res.data.data ?? []);
  },
  classic: async (): Promise<ProductRecomendationRes[]> => {
    return await axiosInstance
      .get<WebRes<ProductRecomendationRes[]>>("/recomendations/classic")
      .then((res) => res.data.data ?? []);
  },
  offers: async (): Promise<ProductRecomendationRes[]> => {
    return await axiosInstance
      .get<WebRes<ProductRecomendationRes[]>>("/recomendations/offers")
      .then((res) => res.data.data ?? []);
  },
};
