"use client";

import Image from "next/image";
import { Trip } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

export const TripItem = ({ trip }: TripItemProps) => {
  return (
    <div className="flex flex-col">
      <Image
        src={trip.coverImage}
        alt={trip.name}
        width={280}
        height={280}
        className="rounded-lg shadow-md"
      />

      <h3 className="text-primaryDarker font-medium text-sm">{trip.name}</h3>
      <div className="flex items-center gap-2 my-1">
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className="text-xs text-grayPrimary">{trip.location}</p>
      </div>

      <p className="text-xs text-grayPrimary">
        <span className="text-primary font-medium">
          {trip.pricePerDay.toString()}
        </span>
        por dia
      </p>
    </div>
  );
};
