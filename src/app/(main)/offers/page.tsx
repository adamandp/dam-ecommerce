import CommitmentSection from "@/components/offers/commitment-section";
import OffersSection from "@/components/offers/offers-section";
import { getOffersRecomendations } from "@/services/get-offers-recomendations";
import { getQueryClient } from "@/utils/get-query-client";

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["offers-recomendations"],
    queryFn: getOffersRecomendations,
  });

  return (
    <main className="grid gap-c-10 py-c-10">
      <OffersSection />
      <CommitmentSection />
    </main>
  );
}
