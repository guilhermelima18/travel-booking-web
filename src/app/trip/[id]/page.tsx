import { TripTemplate } from "@/templates/trip";

export default function Trip({ params }: { params: { id: string } }) {
  return (
    <div className="mb-10">
      <TripTemplate tripId={params.id} />
    </div>
  );
}
