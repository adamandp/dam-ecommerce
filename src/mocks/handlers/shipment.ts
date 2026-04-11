import { http, HttpResponse, delay } from "msw";
import { WebResponse as WebRes } from "@/types/common-interface";
import { ShipmentMethodRes } from "@/types/shipment-interface";
import { mocksShipmentMethod } from "../data/shipment/shipment-method";

export const shipmentHandlers = [
  http.get<never, never, WebRes<ShipmentMethodRes[]>>(
    "/shipment/methods",
    async () => {
      await delay(500);

      return HttpResponse.json<WebRes<ShipmentMethodRes[]>>({
        data: mocksShipmentMethod,
      });
    },
  ),
];
