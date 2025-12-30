import React from "react";

const BrandSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 w-full">
      <div className="bg-white rounded shadow p-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-2 bg-gray-50 rounded"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-3 bg-gray-100 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSkeleton;
