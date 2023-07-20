import { prisma } from "@/libs/prisma";
import { RecommendedTripItem } from "./recommended-trip-item";
import { TripProps } from "@/types/trip";

async function getTrips() {
  return await prisma.trip.findMany();
}

export const RecommendedTrips = async () => {
  const trips = await getTrips();

  const tripsFormattedTypes = trips.map((trip) => ({
    ...trip,
    pricePerDay: Number(trip.pricePerDay),
  }));

  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter" />
        <h2 className="font-medium text-grayPrimary whitespace-nowrap mx-2">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter" />
      </div>

      <div className="grid grid-cols-4 justify-items-center mt-10 gap-10">
        {tripsFormattedTypes.map((trip: TripProps) => (
          <RecommendedTripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};
