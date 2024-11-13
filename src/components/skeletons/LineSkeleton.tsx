import { Skeleton } from "./Skeleton";

// SKELETON DE 1 RENGLON
export default function LineSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Skeleton className="h-4 w-full sm:w-3/4 md:w-1/2" />
    </div>
  );
}
