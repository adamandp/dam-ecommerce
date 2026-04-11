import { AddressRes } from "@/types/address-interface";

export const mocksAddress: AddressRes[] = [
  {
    id: "9f8e7d6c-5b4a-3c2d-1e0f-9a8b7c6d5e4f",
    recipient: "Rachel",
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
    subdistrict: "Kebayoran Baru",
    village: "Gandaria",
    postalCode: 12140,
    address: "Jl. Gandaria I No.25",
    isPrimary: false,
  },
  {
    id: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    recipient: "Danilla",
    province: "Jawa Barat",
    city: "Bandung",
    subdistrict: "Coblong",
    village: "Dago",
    postalCode: 40135,
    address: "Jl. Ir. H. Juanda No.100",
    isPrimary: true,
  },
];
