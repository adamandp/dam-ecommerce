const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const rupiahFormatter = {
  format: (value: number) => {
    return formatter.format(value).replace(/^Rp[\s\u00A0]+/, "Rp");
  },
};
