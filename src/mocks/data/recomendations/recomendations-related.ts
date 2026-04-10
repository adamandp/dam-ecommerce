import { DiscountTypeEnum } from "@/types/discount-interface";
import { ProductRecomendationRes } from "@/types/recomendations-interface";

export const mocksRecomendationsRelated: ProductRecomendationRes[] = [
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    name: "Timeless Chocolate Scoop",
    imageUrl: "/products/classic1.png",
    description:
      "An all-time favorite with smooth, creamy texture and a nostalgic taste that brings back memories of childhood summers and pure joy.",
    rate: 5,
    origPrice: 35000,
    discountType: null,
    discountValue: null,
    discountPrice: null,
  },
  {
    id: "8f9e0d1c-2b3a-4b5c-6d7e-8f9a0b1c2d3e",
    name: "Classic Creamy Dream",
    imageUrl: "/products/classic2.png",
    description:
      "An all-time favorite with smooth, creamy texture and a nostalgic taste. Made with premium vanilla beans for an unmatched classic experience.",
    rate: 3,
    origPrice: 32000,
    discountType: null,
    discountValue: null,
    discountPrice: null,
  },
  {
    id: "5d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a",
    name: "Classic Creamy Dream",
    imageUrl: "/products/classic3.png",
    description:
      "An all-time favorite with smooth, creamy texture and a nostalgic taste. Perfect as a base for sundaes or enjoyed on its own.",
    rate: 4,
    origPrice: 40000,
    discountType: DiscountTypeEnum.PERCENTAGE,
    discountValue: 20,
    discountPrice: 32000,
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    name: "Timeless Chocolate Scoop",
    imageUrl: "/products/classic4.png",
    description:
      "An all-time favorite with smooth, creamy texture and a nostalgic taste, featuring premium cocoa sourced from the finest plantations.",
    rate: 5,
    origPrice: 38000,
    discountType: null,
    discountValue: null,
    discountPrice: null,
  },
];
