import { getClassicRecomendation } from "@/services/get-classic-recomendations";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Classic from "@/components/home/classic";
import Banner from "@/components/home/banner";
import Relive from "@/components/home/relive";
import Categories from "@/components/home/categories";
import { getCategoriesRecomendation } from "@/services/get-categories-recomendations";
import Special from "@/components/home/special";
import Signup from "@/components/sign-up-section";
import FollowUs from "@/components/home/follow-us";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["classic-recomendations"],
    queryFn: getClassicRecomendation,
  });

  await queryClient.prefetchQuery({
    queryKey: ["categories-recomendations"],
    queryFn: () => getCategoriesRecomendation(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="overflow-hidden">
        <Banner />
        <Relive />
        <Classic />
        <Categories />
        <Special />
        <Signup />
        <FollowUs />
      </main>
    </HydrationBoundary>
  );
}
