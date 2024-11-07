import { Skeleton } from "./Skeleton";

export default function ProductCartSkeleton() {
  return (
    <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg">
      {/* Header - Added Product */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Skeleton className="h-16 w-16 rounded-md" />
        </div>
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>

      <div className="space-y-4">
        {/* Complementa tu compra section */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-6 w-24 rounded-md" />
        </div>

        {/* Product Items */}
        {[1, 2].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Skeleton className="h-24 w-24 rounded-md" />
            </div>
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
