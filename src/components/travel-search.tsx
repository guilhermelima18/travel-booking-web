"use client";

import { Button } from "@/components/button";
import { CurrencyInput } from "@/components/inputs/currency-input";
import { DatePicker } from "@/components/datepicker";
import { Input } from "@/components/inputs/input";

export const TravelSearch = () => {
  return (
    <div className="w-full h-80 bg-search-background bg-contain bg-center bg-no-repeat p-5 flex flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre a sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex items-center justify-center mt-5 gap-3">
        <Input className="w-60" placeholder="Onde você quer ir?" />
        <DatePicker
          className="w-60"
          placeholderText="Data de ida"
          onChange={() => {}}
        />
        <CurrencyInput className="w-60" placeholder="Orçamento" />

        <Button className="w-60">Buscar</Button>
      </div>
    </div>
  );
};
