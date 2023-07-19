"use client";

import Image from "next/image";
import { TripProps } from "@/types/trip";
import { FormAccommodation } from "@/components/form-accommodation";

interface AboutTripProps {
  trip: TripProps;
}

export const AboutTrip = ({ trip }: AboutTripProps) => {
  return (
    <section className="w-full flex justify-between mt-16">
      <aside className="w-[900px] flex flex-col">
        <h3 className="font-bold text-lg">Sobre a viagem</h3>
        <p className="mt-5 text-sm">{trip?.description}</p>

        <div className="grid grid-cols-2 mt-10 gap-5">
          {trip.highlights.map((highlight) => (
            <span key={highlight} className="flex items-center gap-3 text-sm">
              <Image
                src="/check-icon.png"
                alt="Ícone de check"
                width={15}
                height={15}
              />
              {highlight}
            </span>
          ))}
        </div>
      </aside>

      <FormAccommodation trip={trip} />
    </section>
  );
};
