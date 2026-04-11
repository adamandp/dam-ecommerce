import { http, HttpResponse, delay } from "msw";
import { WebResponse as WebRes } from "@/types/common-interface";
import { mocksAddress } from "../data/address/address";
import { AddressRes } from "@/types/address-interface";

export const addressHandlers = [
  http.get<never, never, WebRes<AddressRes[]>>("/address/user", async () => {
    await delay(500);

    return HttpResponse.json<WebRes<AddressRes[]>>({
      data: mocksAddress,
    });
  }),
];
