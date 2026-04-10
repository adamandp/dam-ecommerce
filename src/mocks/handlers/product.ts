import { http, HttpResponse, delay } from "msw"; // 1. Import delay
import { WebResponse } from "@/types/common-interface";
import { UUID } from "crypto";
import {
  ProductDto,
  ProductInformationRes,
  ProductRes,
} from "@/types/product-interface";
import { mocksProduct } from "../data/product/product";
import { mocksProductInformation } from "../data/product/product-information";

export const productHandlers = [
  http.get<ProductDto, never, WebResponse<ProductRes>>(
    "/product/:id",
    async ({ params }) => {
      const id = params.id;

      console.log("id" + id);

      return HttpResponse.json<WebResponse<ProductRes>>({
        data: mocksProduct,
      });
    },
  ),

  http.get<ProductDto, never, WebResponse<ProductInformationRes>>(
    "/product/information/:id",
    async ({ params }) => {
      await delay(500);

      const id = params.id;

      console.log("id" + id);

      return HttpResponse.json<WebResponse<ProductInformationRes>>({
        data: mocksProductInformation,
      });
    },
  ),
];
