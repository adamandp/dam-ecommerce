interface AddToCartDto {
  productId: string;
  quantity: number;
}

interface RemoveFromCartDto {
  productId: string;
  quantity: number;
}

interface CartItemRes {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  origPrice: number;
  discPrice?: number | null;
  qty: number;
}

export type { AddToCartDto, RemoveFromCartDto, CartItemRes };
