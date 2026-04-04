import { cartsHandlers } from "./carts";
import { recomendationsHandlers } from "./recomendations";

export const handlers = [...recomendationsHandlers, ...cartsHandlers];
