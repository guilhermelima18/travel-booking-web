import { TripTemplate } from "@/templates/trip";

export default function Trip({ params }: { params: { id: string } }) {
  return <TripTemplate tripId={params.id} />;
}
