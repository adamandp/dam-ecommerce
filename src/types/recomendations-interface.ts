export enum DiscountTypeEnum {
  PERCENTAGE = "PERCENTAGE",
  FIXED = "FIXED",
  PRICE = "PRICE",
  FREE_ITEM = "FREE_ITEM",
}

interface CategoriesRecomendationRes {
  id: string;
  imageUrl: string;
  category: string;
}

export type { CategoriesRecomendationRes };
