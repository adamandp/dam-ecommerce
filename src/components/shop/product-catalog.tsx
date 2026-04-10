"use client";

import { productsApi } from "@/services/products-api";
import { useQuery } from "@tanstack/react-query";
import CardProduct from "../product-card";
import CardProductSkeleton from "../product-card-skeleton";
import { CatalogDto } from "@/types/products-interface";
import { useSearchParams } from "next/navigation";

export default function ProductCatalog() {
  const searchParams = useSearchParams();

  const filters: CatalogDto = {
    q: searchParams.get("q") || undefined,
    sort: (searchParams.get("sort") as "default" | "asc" | "desc") || undefined,
    cat: searchParams.get("cat")?.split(",") || undefined,
    min: searchParams.get("min") ? Number(searchParams.get("min")) : undefined,
    max: searchParams.get("max") ? Number(searchParams.get("max")) : undefined,
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["catalog", filters],
    queryFn: () => productsApi.getCatalog(filters),
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-c-4 justify-center w-full lg:grid-cols-3 xl:grid-cols-4">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-full">
              <CardProductSkeleton className="w-full" />
            </div>
          ))
        : products?.map((item) => (
            <div key={item.id} className="w-full">
              <CardProduct {...item} className="w-full" />
            </div>
          ))}

      {!isLoading && products?.length === 0 && (
        <div className="col-span-full py-20 text-center text-gray-500">
          No products found. Try adjusting your filters!
        </div>
      )}
    </div>
  );
}
