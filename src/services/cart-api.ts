import {
  AddToCartDto,
  CartItemRes,
  RemoveFromCartDto,
} from "@/types/carts-interface";
import { WebResponse as WebRes } from "@/types/common-interface";
import axiosInstance from "@/utils/axios-instance";

export const cartApi = {
  getCart: async (): Promise<CartItemRes[]> => {
    return await axiosInstance
      .get<WebRes<CartItemRes[]>>("/carts/user")
      .then((res) => res.data.data ?? []);
  },

  addToCart: async (request: AddToCartDto[]): Promise<AddToCartDto[]> => {
    return await axiosInstance
      .post<WebRes<AddToCartDto[]>>("/carts/add", request)
      .then((res) => res.data.data ?? []);
  },

  removeFromCart: async (request: RemoveFromCartDto[]): Promise<WebRes> => {
    return await axiosInstance.post<WebRes<RemoveFromCartDto[]>>(
      "/carts/remove",
      request,
    );
  },
};
