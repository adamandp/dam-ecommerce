export default function CartCardSkeleton({ className = "" }) {
  return (
    <div
      className={`bg-card p-c-3 rounded-c-5 flex items-stretch gap-c-3 w-full select-none animate-pulse ${className}`}
    >
      <section className="flex items-center gap-c-3">
        <div className="size-c-6 rounded-md bg-muted shrink-0" />

        <div className="bg-[#F7F2F7] dark:bg-[#2A202A] p-c-5 rounded-c-5 w-c-35 min-h-full sm:h-c-30 grid place-items-center">
          <div className="w-full h-full min-h-15 sm:h-c-20 bg-muted/50 rounded-c-3" />
        </div>
      </section>

      <section className="flex items-center gap-c-4 w-full overflow-hidden py-c-2">
        <div className="w-full grid sm:flex gap-y-c-3">
          <div className="overflow-hidden w-full flex flex-col justify-center gap-c-2">
            <div className="h-c-5 w-3/4 max-w-50 bg-muted rounded-c-1" />
            <div className="h-c-4 w-1/2 max-w-30 bg-muted/60 rounded-c-1" />
          </div>

          <div className="grid sm:flex gap-c-3 w-full sm:items-center">
            <div className="flex flex-col gap-c-1 justify-center sm:w-c-30 sm:order-2 sm:items-end sm:ml-auto">
              <div className="h-c-3-5 w-16 bg-muted/40 rounded-c-1" />

              <div className="h-c-5 w-24 bg-muted rounded-c-1" />
            </div>

            <div className="flex items-center gap-c-3 sm:ml-auto">
              <div className="size-c-10 bg-muted rounded-md shrink-0" />
              <div className="h-c-5 w-c-5 bg-muted/60 rounded-sm" />
              <div className="size-c-10 bg-muted rounded-md shrink-0" />
            </div>
          </div>
        </div>

        <div className="size-c-10 shrink-0 bg-muted rounded-md" />
      </section>
    </div>
  );
}
