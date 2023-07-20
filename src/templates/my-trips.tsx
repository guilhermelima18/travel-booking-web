import { Button } from "@/components/button";
import { CardDestinationName } from "@/components/card-destination-name";
import { DateAndGuestsTrip } from "@/components/date-and-guests-trip";
import { PriceInformationTrip } from "@/components/price-information-trip";

export const MyTripsTemplate = () => {
  return (
    <div className="container mx-auto w-full flex flex-col">
      <header className="w-[500px] my-5">
        <h1 className="font-semibold text-2xl">Minhas viagens</h1>
      </header>

      <div className="w-full flex items-center gap-5">
        <div className="w-[500px] flex flex-col border border-gray-400 p-8 rounded-lg">
          <CardDestinationName
            name="Hotel Maravista"
            location="Paraty, Rio de Janeiro, Brasil"
            countryCode="BR"
          />

          <div className="flex flex-col gap-3 pb-5 border-b border-gray-400 mt-5">
            <h2 className="text-primaryDarker text-xl font-semibold">
              Sobre a viagem
            </h2>
            <DateAndGuestsTrip />
          </div>

          <PriceInformationTrip totalPrice={3390} />

          <Button variant="danger" className="mt-5">
            Cancelar reserva
          </Button>
        </div>
      </div>
    </div>
  );
};
