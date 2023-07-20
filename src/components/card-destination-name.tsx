import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

interface CardDestinationNameProps {
  name: string;
  location: string;
  countryCode: string;
}

export const CardDestinationName = ({
  name,
  location,
  countryCode,
}: CardDestinationNameProps) => {
  return (
    <div className="flex items-center gap-5 border-b border-gray-400 pb-5">
      <Image
        src="https://github.com/guilhermelima18.png"
        alt="Logo"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-md">{name}</h4>
        <h5 className="flex items-center gap-2 text-sm text-grayPrimary">
          <ReactCountryFlag countryCode={countryCode} svg />
          {location}
        </h5>
      </div>
    </div>
  );
};
