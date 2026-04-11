import Image from "next/image";
import { ComponentProps } from "react";

interface ShipmentCardProps extends ComponentProps<"div"> {
  code: string;
  cost: number;
  description: string;
  etd?: string;
  name: string;
  service: string;
}

export const COURIERS = [
  { name: "anteraja", logo: "/courier/anteraja.svg" },
  { name: "dse", logo: "/courier/dse.svg" },
  { name: "pos", logo: "/courier/pos.svg" },
  { name: "lion", logo: "/courier/lion.svg" },
  { name: "ninja", logo: "/courier/ninja.svg" },
  { name: "ide", logo: "/courier/ide.svg" },
  { name: "sicepat", logo: "/courier/sicepat.svg" },
  { name: "sap", logo: "/courier/sap.svg" },
  { name: "ncs", logo: "/courier/ncs.svg" },
  { name: "rex", logo: "/courier/rex.svg" },
  { name: "jtl", logo: "/courier/jtl.svg" },
  { name: "sentral", logo: "/courier/sentral.svg" },
  { name: "jne", logo: "/courier/jne.svg" },
  { name: "tiki", logo: "/courier/tiki.svg" },
  { name: "rpx", logo: "/courier/rpx.svg" },
  { name: "pandu", logo: "/courier/pandu.svg" },
  { name: "wahana", logo: "/courier/wahana.svg" },
  { name: "jnt", logo: "/courier/jnt.svg" },
  { name: "slis", logo: "/courier/slis.svg" },
  { name: "expedito", logo: "/courier/expedito.svg" },
  { name: "ray", logo: "/courier/ray.svg" },
  { name: "first", logo: "/courier/first.svg" },
  { name: "star", logo: "/courier/star.svg" },
];

export default function ShipmentCard({
  code,
  cost,
  description,
  etd,
  name,
  service,
  className,
  ...props
}: ShipmentCardProps) {
  const logo = COURIERS.find((c) => c.name === code);

  return (
    <div
      className={`bg-card border border-border rounded-c-4 p-c-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer ${className}`}
      {...props}
    >
      <div className="flex items-center gap-c-4">
        {logo?.logo && (
          <Image
            src={`/checkout/${logo.logo}`}
            width={1000}
            height={1000}
            alt={name}
            className="size-c-20 object-contain"
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold">
            {name.match(/\(([^)]+)\)/)?.[1] ?? name}
          </span>
          <span className="text-xs text-muted-foreground">
            {description} • {service}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-pink-500">${cost.toFixed(2)}</p>
        {etd && <p className="text-xs text-muted-foreground">ETD: {etd}</p>}
      </div>
    </div>
  );
}
