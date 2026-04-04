import { dummyCategories } from "../data/categories";
import { cartsHandlers } from "./carts";
import { categoriesHandlers } from "./categories";
import { productsHandlers } from "./products";
import { recomendationsHandlers } from "./recomendations";

export const handlers = [
  ...recomendationsHandlers,
  ...cartsHandlers,
  ...productsHandlers,
  ...categoriesHandlers,
];
