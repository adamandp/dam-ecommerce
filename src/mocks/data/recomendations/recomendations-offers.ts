import { DiscountTypeEnum } from "@/types/discount-interface";
import { ProductRecomendationRes } from "@/types/recomendations-interface";

export const mocksOffersRecomendations: ProductRecomendationRes[] = [
  {
    id: "a1b2c3d4-e5f6-4a5b-6c7d-8e9f0a1b2c3d",
    name: "Double Delight Cone",
    imageUrl: "/products/cornetto2.png",
    description:
      "Crispy cone filled with layers of creamy delight and surprise toppings, featuring a double swirl of vanilla and dark chocolate bliss.",
    rate: 3,
    origPrice: 28000,
    discountType: DiscountTypeEnum.PERCENTAGE,
    discountValue: 10,
    discountPrice: 25200,
  },
  {
    id: "f9e8d7c6-b5a4-3c2d-1e0f-g9h8i7j6k5l4",
    name: "Almond Swirl Cone",
    imageUrl: "/products/cornetto3.png",
    description:
      "Crispy cone filled with layers of creamy delight and surprise toppings, topped with caramelized almonds for an extra crunch in every bite.",
    rate: 4,
    origPrice: 27000,
    discountType: DiscountTypeEnum.PERCENTAGE,
    discountValue: 10,
    discountPrice: 24300,
  },
  {
    id: "b1c2d3e4-f5a6-b7c8-d9e0-f1a2b3c4d5e6",
    name: "Fruity Chill Mix",
    imageUrl: "/products/fruit-based3.png",
    description:
      "Refreshing fruit flavors packed into a cool, colorful scoop. Featuring a mix of summer berries and a hint of refreshing lime.",
    rate: 5,
    origPrice: 35000,
    discountType: DiscountTypeEnum.PERCENTAGE,
    discountValue: 10,
    discountPrice: 31500,
  },
  {
    id: "i9j8k7l6-m5n4-o3p2-q1r0-s9t8u7v6w5x4",
    name: "Sicilian Lemon Gelato",
    imageUrl: "/products/gelato3.png",
    description:
      "Authentic Italian gelato made with premium ingredients and bold flavor. The perfect balance of tartness and silky smooth texture.",
    rate: 5,
    origPrice: 50000,
    discountType: DiscountTypeEnum.PERCENTAGE,
    discountValue: 20,
    discountPrice: 40000,
  },
  {
    id: "x1y2z3a4-b5c6-d7e8-f9g0-h1i2j3k4l5m6",
    name: "Oatmilk Berry Cool",
    imageUrl: "/products/vegan6.png",
    description:
      "Dairy-free frozen dessert made from natural plant-based ingredients. Refreshingly light and ethically sourced, a berry lover's vegan dream.",
    rate: 5,
    origPrice: 55000,
    discountType: DiscountTypeEnum.FIXED,
    discountValue: 5000,
    discountPrice: 50000,
  },
];
