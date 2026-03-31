export default function CardProductSkeleton({ className = "" }) {
  return (
    <div
      className={`bg-card p-c-3 rounded-c-5 grid content-between h-full w-c-70 select-none relative overflow-hidden animate-pulse ${className}`}
    >
      <div className="grid place-items-center bg-[#F7F2F7] dark:bg-[#2A202A] rounded-c-5 p-c-5">
        <div className="h-c-61 w-full bg-muted/50 rounded-c-3" />
      </div>

      <div className="flex justify-between mt-c-5 items-center">
        <div className="h-c-5-5 w-c-30 bg-muted rounded-c-2" />
        <div className="h-c-4 w-c-12 bg-muted rounded-c-2" />
      </div>

      <div className="mt-c-3 space-y-c-1-5">
        <div className="h-c-3-5 w-full bg-muted/60 rounded-c-1" />
        <div className="h-c-3-5 w-c-40 bg-muted/60 rounded-c-1" />
      </div>

      <div className="mt-c-3 flex justify-between items-center">
        <div className="flex gap-c-2 items-center">
          <div className="h-c-5 w-c-15 bg-muted/40 rounded-c-1" />
          <div className="h-c-6 w-c-25 bg-muted rounded-c-1" />
        </div>

        <div className="h-c-12 w-c-12 bg-muted rounded-c-2" />
      </div>

      <div className="absolute top-c-5 -right-c-10 w-c-30 h-c-6 bg-muted/30 rotate-45" />
    </div>
  );
}
