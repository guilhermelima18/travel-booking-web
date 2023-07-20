import Image from "next/image";

export const QuickSearch = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter" />
        <h2 className="font-medium text-grayPrimary whitespace-nowrap mx-2">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter" />
      </div>

      <div className="flex w-full justify-center mt-10 gap-16">
        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/hotel-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/farm-icon.png" alt="Fazenda" />
          <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/cottage-icon.png" alt="Chalé" />
          <p className="text-sm text-grayPrimary">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} src="/inn-icon.png" alt="Pousada" />
          <p className="text-sm text-grayPrimary">Pousada</p>
        </div>
      </div>
    </div>
  );
};
