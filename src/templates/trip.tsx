import Image from "next/image";
import { prisma } from "@/libs/prisma";
import ReactCountryFlag from "react-country-flag";
import { AboutTrip } from "@/components/about-trip";
import { MapTrips } from "@/components/maps-trip";

interface TripTemplateProps {
  tripId: string;
}

async function getTrip(id: string) {
  return await prisma.trip.findUniqueOrThrow({
    where: {
      id,
    },
  });
}

export const TripTemplate = async ({ tripId }: TripTemplateProps) => {
  const trip = await getTrip(tripId);

  const tripFormattedTypes = {
    ...trip,
    pricePerDay: Number(trip.pricePerDay),
  };

  return (
    <div className="container mx-auto px-5 w-full">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-extrabold">{trip?.name}</h1>
        <h4 className="flex items-center gap-3 underline">
          <ReactCountryFlag countryCode={trip?.countryCode} svg />
          {trip?.location}
        </h4>
      </header>
      <div className="w-full flex gap-3 mt-10">
        <Image
          src={trip?.coverImage}
          alt={trip?.name}
          width={800}
          height={100}
          className="rounded-lg"
        />
        <div className="grid grid-cols-2 gap-3">
          {trip.imagesUrl.map((image) => (
            <Image
              key={image}
              src={image}
              alt={trip?.name}
              width={500}
              height={100}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>

      <AboutTrip trip={tripFormattedTypes} />

      <MapTrips />
    </div>
  );
};
