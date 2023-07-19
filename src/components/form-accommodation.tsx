"use client";

import { TripProps } from "@/types/trip";
import { Button } from "@/components/button";
import { DatePicker } from "@/components/datepicker";
import { Input } from "@/components/inputs/input";

interface FormAccommodationProps {
  trip: TripProps;
}

export const FormAccommodation = ({ trip }: FormAccommodationProps) => {
  return (
    <form className="w-[600px] h-[290px] flex flex-col border border-gray-500 rounded-lg p-5 gap-5">
      <h1>
        <strong>R$ {trip.pricePerDay} </strong>/ noite
      </h1>
      <div className="w-full flex flex-1 items-center gap-3">
        <DatePicker
          className="w-[272px]"
          placeholderText="Data inicial"
          onChange={() => {}}
        />
        <DatePicker
          className="w-[272px]"
          placeholderText="Data fim"
          onChange={() => {}}
        />
      </div>
      <Input placeholder="Hóspedes" />

      <footer className="flex flex-col items-center gap-5">
        <div className="w-full flex items-center justify-between">
          <span>Total (7 noites)</span>
          <span>R$ 2.660</span>
        </div>

        <Button className="w-[250px]">Continuar</Button>
      </footer>
    </form>
  );
};
