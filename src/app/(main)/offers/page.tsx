import CommitmentSection from "@/components/offers/commitment-section";
import OffersSection from "@/components/offers/offers-section";
import { getRecomendations } from "@/services/recomendations-api";
import { getQueryClient } from "@/utils/get-query-client";

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["offers-recomendations"],
    queryFn: getRecomendations.offers,
  });

  return (
    <main className="grid gap-c-10 py-c-10">
      <OffersSection />
      <CommitmentSection />
    </main>
  );
}
