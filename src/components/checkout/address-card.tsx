import { MapPin } from "lucide-react";
import { ComponentProps } from "react";

interface AddressCardProps extends ComponentProps<"div"> {
  id: string;
  recipient: string;
  isPrimary: boolean;
  province: string;
  city: string;
  subdistrict: string;
  village: string;
  postalCode: number;
  address: string;
}

export default function AddressCard({
  id,
  recipient,
  isPrimary,
  province,
  city,
  subdistrict,
  village,
  postalCode,
  address,
  ...props
}: AddressCardProps) {
  return (
    <div
      className="bg-muted rounded-c-4 p-c-4 cursor-pointer hover:bg-accent transition-colors duration-200"
      key={id}
      {...props}
    >
      <div className="flex items-center gap-c-2">
        <MapPin className="size-c-5 text-primary" />
        <span className="text-c-4-5 font-bold">{recipient}</span>
        {isPrimary && (
          <span className="text-c-3 font-semibold text-green-700 bg-green-100 px-c-2 py-c-0-5 rounded-c-2">
            Primary
          </span>
        )}
      </div>
      <div className="ml-c-7 pt-c-2 text-c-4 text-muted-foreground">
        {`${address}, ${village}, ${subdistrict}, ${city}, ${province}, ${postalCode}`}
      </div>
    </div>
  );
}
