import { ProductRes } from "@/types/product-res";
import { WebResponse } from "@/types/common-interface";
import axiosInstance from "@/utils/axios-instance";

export async function getClassicRecomendation(): Promise<ProductRes[]> {
  return await axiosInstance
    .get<WebResponse<ProductRes[]>>("/recomendations/classic")
    .then((res) => res.data.data ?? []);
}
