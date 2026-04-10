import { http, HttpResponse, delay } from "msw"; // 1. Import delay
import { WebResponse } from "@/types/common-interface";
import { ReviewDto, ReviewRes } from "@/types/review-interface";
import { UUID } from "crypto";
import { mocksProductReview } from "../data/review/product-review";

export const reviewHandlers = [
  http.post<never, ReviewDto, WebResponse>("/reviews", async ({ request }) => {
    await delay(800);

    const body = await request.json();

    console.log(`New Review for Product ID: ${body.productId}`, body);

    return HttpResponse.json<WebResponse>({
      message: "✨ Review posted successfully! Thank you for your feedback! 🍦",
    });
  }),

  http.get<{ id: UUID }, never, WebResponse<ReviewRes[]>>(
    "/product/reviews/:id",
    async ({ params }) => {
      await delay(500);

      const id = params.id;

      console.log("id" + id);

      return HttpResponse.json<WebResponse<ReviewRes[]>>({
        data: mocksProductReview,
      });
    },
  ),
];
