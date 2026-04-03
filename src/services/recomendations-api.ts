import { CategoriesRecomendationRes as CategoriesRes } from "@/types/categories-recomendations-interface";
import { WebResponse as WebRes } from "@/types/common-interface";
import { ProductRes } from "@/types/product-res";
import axiosInstance from "@/utils/axios-instance";

export const getRecomendations = {
  categories: async () => {
    return await axiosInstance
      .get<WebRes<CategoriesRes[]>>("/recomendations/categories")
      .then((res) => res.data.data ?? []);
  },
  classic: async () => {
    return await axiosInstance
      .get<WebRes<ProductRes[]>>("/recomendations/classic")
      .then((res) => res.data.data ?? []);
  },
  offers: async () => {
    return await axiosInstance
      .get<WebRes<ProductRes[]>>("/recomendations/offers")
      .then((res) => res.data.data ?? []);
  },
};
