import { YourTripTemplate } from "@/templates/your-trip";

export default function YourTrip({
  params,
}: {
  params: { yourTripId: string };
}) {
  return <YourTripTemplate yourTripId={params.yourTripId} />;
}
