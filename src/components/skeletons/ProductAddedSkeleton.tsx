import React from "react";
import { Skeleton } from "./Skeleton";
import { X } from "lucide-react";

const ProductAddedSkeleton: React.FC = () => {
  return (
    <div className="w-full p-4 bg-background">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-5 w-40" />
        </div>
        <X className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex items-start space-x-4">
        <Skeleton className="h-24 w-24 rounded-md" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex items-center justify-between mt-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-10 w-1/3" />
      </div>
    </div>
  );
};

export default ProductAddedSkeleton;
