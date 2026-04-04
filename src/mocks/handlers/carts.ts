import { http, HttpResponse, delay } from "msw";
import { WebResponse as WebRes } from "@/types/common-interface";
import {
  AddToCartDto,
  CartItemRes,
  RemoveFromCartDto,
} from "@/types/carts-interface";
import { dummyCarts } from "../data/carts";

export const cartsHandlers = [
  http.get("/carts/user", async () => {
    await delay(500);

    return HttpResponse.json<WebRes<CartItemRes[]>>({
      data: dummyCarts,
    });
  }),

  http.post<never, AddToCartDto[], WebRes<CartItemRes[]>>(
    "/carts/add",
    async () => {
      await delay(500);

      const data = dummyCarts.slice(2);
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
