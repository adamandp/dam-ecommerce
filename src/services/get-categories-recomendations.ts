import { CategoriesRecomendationRes } from "@/types/categories-recomendations-interface";
import { WebResponse } from "@/types/common-interface";
import axiosInstance from "@/utils/axios-instance";

export async function getCategoriesRecomendation(): Promise<
  CategoriesRecomendationRes[]
> {
  return await axiosInstance
    .get<
      WebResponse<CategoriesRecomendationRes[]>
    >("/recomendations/categories")
    .then((res) => res.data.data ?? []);
}
