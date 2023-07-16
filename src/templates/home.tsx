import { QuickSearch } from "@/components/quick-search";
import { RecommendedTrips } from "@/components/recommended-trips";
import { TravelSearch } from "@/components/travel-search";

export const HomeTemplate = () => {
  return (
    <div>
      <TravelSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
};
