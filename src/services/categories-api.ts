import { CategoriesRes } from "@/types/categories-interface";
import { WebResponse as WebRes } from "@/types/common-interface";
import axiosInstance from "@/utils/axios-instance";

export const categoriesApi = {
  getCategories: async (): Promise<CategoriesRes[]> => {
    return await axiosInstance
      .get<WebRes<CategoriesRes[]>>("/categories")
      .then((res) => res.data.data ?? []);
  },
};
