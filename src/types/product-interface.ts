import { PaginationDto } from "./common-interface";

export enum DiscountTypeEnum {
  PERCENTAGE = "PERCENTAGE",
  FIXED = "FIXED",
  PRICE = "PRICE",
  FREE_ITEM = "FREE_ITEM",
}

interface CatalogDto extends PaginationDto {
  q?: string;
  sort?: "asc" | "desc" | "default";
  min?: number;
  max?: number;
  cat?: string[];
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

export type { ProductRes, CatalogDto };
