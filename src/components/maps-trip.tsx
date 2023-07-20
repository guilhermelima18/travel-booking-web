"use client";

import GoogleMapReact from "google-map-react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_MAPS as string;

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export const MapTrips = () => {
  const defaultProps = {
    center: {
      lat: -22.4350248,
      lng: -48.1908368,
    },
    zoom: 11,
  };

  const handleApiLoaded = (map: any, maps: any) => {
    console.log("MAP: ", map, "MAPS: ", maps);
  };

  return (
    <div className="w-full h-[500px] mt-10 flex flex-col">
      <h3 className="font-semibold text-primaryDarker mb-5">Localização</h3>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
