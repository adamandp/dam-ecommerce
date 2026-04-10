import { http, HttpResponse, delay } from "msw";
import { WebResponse as WebRes } from "@/types/common-interface";
import {
  AddToCartDto,
  CartItemRes,
  RemoveFromCartDto,
} from "@/types/carts-interface";
import { mocksCarts } from "../data/carts/carts";

export const cartsHandlers = [
  http.get<never, never, WebRes<CartItemRes[]>>("/carts/user", async () => {
    await delay(500);

    return HttpResponse.json<WebRes<CartItemRes[]>>({
      data: mocksCarts,
    });
  }),

  http.post<never, AddToCartDto[], WebRes<CartItemRes[]>>(
    "/carts/add",
    async () => {
      await delay(500);

      const data = mocksCarts.slice(2);
      return HttpResponse.json<WebRes<CartItemRes[]>>({
        data,
      });
    },
  ),

  http.post<never, RemoveFromCartDto[], WebRes>("/carts/remove", async () => {
    await delay(500);

    return HttpResponse.json<WebRes>({
      message: "🗑️ ${message} deleted successfully! Sayonara! 👋",
    });
  }),
];
