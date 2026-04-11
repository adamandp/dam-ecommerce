interface AddressPreviewProps {
  id: string;
  recipient: string;
  province: string;
  city: string;
  subdistrict: string;
  village: string;
  postalCode: number;
  address: string;
  isPrimary: boolean;
}

export default function AddressPreview({
  id,
  recipient,
  isPrimary,
  ...props
}: AddressPreviewProps) {
  return (
    <div key={id} className="ml-c-7 pt-c-2 text-left">
      <div className="flex items-center gap-c-2">
        <span className="text-c-4-5 font-semibold">{recipient}</span>
        {isPrimary && (
          <span className="text-c-3 font-semibold text-green-700 bg-green-100 px-c-2 py-c-0-5 rounded-c-2">
            Primary
          </span>
        )}
      </div>
      <div className="pt-c-2 text-c-4 text-muted-foreground">
        {Object.values(props).filter(Boolean).join(", ")}
      </div>
    </div>
  );
}
