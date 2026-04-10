import { DiscountTypeEnum } from "@/types/discount-interface";
import { ProductRes } from "@/types/product-interface";

export const mocksProduct: ProductRes = {
  id: "5d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a",
  name: "Classic Creamy Dream",
  imageUrl: "/products/classic3.png",
  description:
    "An all-time favorite with smooth, creamy texture and a nostalgic taste. Perfect as a base for sundaes or enjoyed on its own.",
  rate: 4,
  sales: 100,
  category: "Classic",
  origPrice: 40000,
  discountType: DiscountTypeEnum.PERCENTAGE,
  discountValue: 20,
  discountPrice: 32000,
};
