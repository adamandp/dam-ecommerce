export enum DiscountTypeEnum {
  PERCENTAGE = "PERCENTAGE",
  FIXED = "FIXED",
  PRICE = "PRICE",
  FREE_ITEM = "FREE_ITEM",
}

interface ProductRes {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  rate: number;
  origPrice: number;
  discountPrice?: number | null;
  discountType?: DiscountTypeEnum | null;
  discountValue?: number | null;
}

export type { ProductRes };
