"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TripProps } from "@/types/trip";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/datepicker";
import { Input } from "@/components/inputs/input";

interface FormReservationProps {
  trip: TripProps;
}

export const FormReservation = ({ trip }: FormReservationProps) => {
  const router = useRouter();

  const handleRedirectYourTripURL = (yourTripId: string) => {
    router.push(`/your-trip/${yourTripId}`);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    handleRedirectYourTripURL(trip.id);
  };

  return (
    <form
      className="w-[550px] h-[290px] flex flex-col border border-gray-500 rounded-lg p-5 gap-5"
      onSubmit={onSubmit}
    >
      <h1>
        <strong>R$ {trip?.pricePerDay} </strong>/ noite
      </h1>
      <div className="w-full flex flex-1 items-center gap-3">
        <DatePicker
          className="w-[248px]"
          placeholderText="Data de início"
          onChange={() => {}}
        />
        <DatePicker
          className="w-[248px]"
          placeholderText="Data final"
          onChange={() => {}}
        />
      </div>
      <Input placeholder={`Número de hóspedes: (max: ${trip?.maxGuests})`} />

      <footer className="flex flex-col items-center gap-5">
        <div className="w-full flex items-center justify-between">
          <span className="font-medium text-sm text-primaryDarker">
            Total (7 noites)
          </span>
          <span className="font-medium text-sm text-primaryDarker">
            R$ 2.660
          </span>
        </div>

        <Button className="w-full">Reservar agora</Button>
      </footer>
    </form>
  );
};
