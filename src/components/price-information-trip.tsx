interface PriceInformationTrip {
  totalPrice: number;
}

export const PriceInformationTrip = ({ totalPrice }: PriceInformationTrip) => {
  return (
    <footer className="flex flex-col gap-3 mt-5">
      <h2 className="text-primaryDarker text-xl font-semibold">
        Informações de preço
      </h2>
      <span className="flex items-center justify-between text-grayPrimary">
        Total
        <strong>{totalPrice}</strong>
      </span>
    </footer>
  );
};
