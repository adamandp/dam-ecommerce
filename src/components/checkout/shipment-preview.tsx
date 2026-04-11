import { rupiahFormatter } from "@/utils/rupiah-formatter";

interface ShipmentPreviewProps {
  name: string;
  description: string;
  cost: number;
  etd?: string;
  service: string;
}

export default function ShipmentPreview({
  name,
  description,
  cost,
  etd,
  service,
}: ShipmentPreviewProps) {
  return (
    <div
      className={`bg-card rounded-c-4 flex gap-c-2 items-center justify-between hover:shadow-md transition-shadow cursor-pointer ml-c-8`}
    >
      <div className="flex flex-col  gap-c-2 text-left ">
        <span className="text-sm font-semibold">
          {name.match(/\(([^)]+)\)/)?.[1] ?? name}
        </span>
        <span className="text-xs text-muted-foreground ">
          {description} • {service}
        </span>
      </div>
      <div className="text-right flex flex-col gap-c-2">
        <p className="text-sm font-bold text-pink-500">
          {rupiahFormatter.format(cost)}
        </p>
        {etd && <p className="text-xs text-muted-foreground">ETD: {etd}</p>}
      </div>
    </div>
  );
}
