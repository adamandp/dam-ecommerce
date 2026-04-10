import { PaginationDto } from "./common-interface";
import { DiscountTypeEnum } from "./discount-interface";

interface CatalogDto extends PaginationDto {
  q?: string;
  sort?: "asc" | "desc" | "default";
  min?: number;
  max?: number;
  cat?: string[];
}

interface CatalogRes {
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

export type { CatalogDto, CatalogRes };
