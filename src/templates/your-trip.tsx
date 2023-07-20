import { Button } from "@/components/button";
import { CardDestinationName } from "@/components/card-destination-name";
import { DateAndGuestsTrip } from "@/components/date-and-guests-trip";
import { PriceInformationTrip } from "@/components/price-information-trip";

/* const getYourTrip = async (tripId: string) => {
  return await prisma.tripReservation.findUnique({
    where: {
      id: tripId,
    },
  });
}; */

export const YourTripTemplate = async ({
  yourTripId,
}: {
  yourTripId: string;
}) => {
  /* const yourTrip = await getYourTrip(yourTripId); */

  return (
    <div className="container mx-auto px-5 w-full flex flex-col">
      <header className="w-[500px] mx-auto mt-10">
        <h1 className="font-semibold text-2xl">Sua viagem</h1>
      </header>

      <main className="w-[500px] flex flex-col mx-auto mt-5">
        <div className="flex flex-col border border-gray-400 p-8 rounded-lg">
          <CardDestinationName
            name="Hotel Maravista"
            location="Paraty, Rio de Janeiro, Brasil"
            countryCode="BR"
          />

          <PriceInformationTrip totalPrice={3390} />
        </div>

        <DateAndGuestsTrip />

        <Button>Finalizar compra</Button>
      </main>
    </div>
  );
};
