export default function ProductsDescriptionSkeleton() {
  const Box = ({ className }: { className: string }) => (
    <div className={`bg-gray-200 dark:bg-zinc-800 rounded ${className}`} />
  );

  const DarkBox = ({ className }: { className: string }) => (
    <div className={`bg-gray-300 dark:bg-zinc-700 rounded-md ${className}`} />
  );

  return (
    <div className="flex flex-col gap-c-8 md:flex-row md:gap-c-10 animate-pulse">
      <div className="w-c-122 bg-gray-200 dark:bg-zinc-800 rounded-c-5 p-c-6 grid place-items-center">
        <DarkBox className="w-full aspect-square max-h-c-80 rounded-c-4" />
      </div>

      <div className="flex-1 flex flex-col gap-c-6 py-2">
        <div className="flex flex-col gap-c-3">
          <DarkBox className="h-c-11 w-3/4" />
          <div className="flex items-center gap-c-5">
            <Box className="h-c-7-5 w-24" />
            <Box className="h-c-7-5 w-20" />
            <Box className="h-c-7-5 w-20" />
          </div>
        </div>

        <div className="flex gap-c-3 items-center border-y border-border py-c-4">
          <DarkBox className="h-c-8-5 w-32" />
          <Box className="h-c-11 w-24" />
        </div>

        <div className="space-y-3">
          <Box className="h-c-5 w-c-112-5" />
          <Box className="h-c-5 w-c-112-5" />
        </div>

        <div className="flex items-center gap-c-4 mt-auto">
          <div className="flex items-center gap-c-3">
            <DarkBox className="size-10" />
            <Box className="h-6 w-4" />
            <DarkBox className="size-10" />
          </div>
          <div className="h-c-15-5 w-36 bg-pink-200 dark:bg-pink-900/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}
