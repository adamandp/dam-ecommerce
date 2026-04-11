import { AddressRes } from "@/types/address-interface";
import { WebResponse as WebRes } from "@/types/common-interface";
import axiosInstance from "@/utils/axios-instance";

export const addressApi = {
  getAddresses: async (): Promise<AddressRes[]> => {
    return await axiosInstance
      .get<WebRes<AddressRes[]>>("/address/user")
      .then((res) => res.data.data ?? []);
  },
};
