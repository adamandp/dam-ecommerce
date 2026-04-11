import { addressHandlers } from "./address";
import { cartsHandlers } from "./carts";
import { categoriesHandlers } from "./categories";
import { productHandlers } from "./product";
import { productsHandlers } from "./products";
import { recomendationsHandlers } from "./recomendations";
import { reviewHandlers } from "./review";
import { shipmentHandlers } from "./shipment";

export const handlers = [
  ...recomendationsHandlers,
  ...cartsHandlers,
  ...categoriesHandlers,
  ...productsHandlers,
  ...productHandlers,
  ...reviewHandlers,
  ...addressHandlers,
  ...shipmentHandlers,
];
