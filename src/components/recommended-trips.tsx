import { prisma } from "@/libs/prisma";
import { TripItem } from "./trip-item";
import { Trip } from "@prisma/client";

const getTrips = async () => {
  return await prisma.trip.findMany();
};

export const RecommendedTrips = async () => {
  const trips = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter" />
        <h2 className="font-medium text-grayPrimary whitespace-nowrap mx-2">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter" />
      </div>

      <div className="flex flex-col items-center mt-5 gap-5">
        {trips.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};
