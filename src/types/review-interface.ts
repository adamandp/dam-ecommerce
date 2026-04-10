import { UUID } from "crypto";

interface ReviewDto {
  productId: UUID;
  rate: number;
  review: string;
}

interface ReviewRes {
  id: UUID;
  rate: number;
  review: string;
  name: string;
  imageUrl: string;
  createdAt: string;
}

export type { ReviewDto, ReviewRes };
