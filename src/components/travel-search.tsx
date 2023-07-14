"use client";

import { Button } from "./button";
import { CurrencyInput } from "./currency-input";
import { DatePicker } from "./datepicker";
import { Input } from "./input";

export const TravelSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre a sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker
            className="w-full"
            placeholderText="Data de ida"
            onChange={() => {}}
          />
          <CurrencyInput placeholder="Orçamento" />
        </div>

        <Button>Buscar</Button>
      </div>
    </div>
  );
};
