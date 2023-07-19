"use client";

import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { TripProps } from "@/types/trip";

interface TripItemProps {
  trip: TripProps;
}

export const RecommendedTripItem = ({ trip }: TripItemProps) => {
  const tripURL = `/trip/${trip.id}`;

  return (
    <Link href={tripURL} passHref>
      <div className="flex flex-col gap-2">
        <div className="relative w-[300px] h-[200px]">
          <Image
            src={trip.coverImage}
            alt={trip.name}
            fill
            className="rounded-lg shadow-md"
          />
        </div>

        <h3 className="text-primaryDarker font-medium text-sm">{trip.name}</h3>
        <div className="flex items-center gap-2 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs text-grayPrimary">{trip.location}</p>
        </div>

        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">
            R$ {trip.pricePerDay.toString()}
          </span>{" "}
          por dia
        </p>
      </div>
    </Link>
  );
};
