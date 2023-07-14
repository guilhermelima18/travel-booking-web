import { QuickSearch } from "@/components/quick-search";
import { TravelSearch } from "@/components/travel-search";

export default function Home() {
  return (
    <div>
      <TravelSearch />
      <QuickSearch />
    </div>
  );
}
