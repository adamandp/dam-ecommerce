import { WebResponse as WebRes } from "@/types/common-interface";
import { ShipmentMethodRes } from "@/types/shipment-interface";
import axiosInstance from "@/utils/axios-instance";

export const shipmentApi = {
  getShipmentMethods: async (): Promise<ShipmentMethodRes[]> => {
    return await axiosInstance
      .get<WebRes<ShipmentMethodRes[]>>("/shipment/methods")
      .then((res) => res.data.data ?? []);
  },
};
