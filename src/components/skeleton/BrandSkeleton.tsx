import React from "react";

const BrandSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      <div className="p-4 bg-white rounded shadow animate-pulse">
        <div className="w-1/3 h-6 mb-3 bg-gray-200 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center p-2 rounded gap-4 bg-gray-50"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="w-1/2 h-4 bg-gray-200 rounded" />
                <div className="w-1/3 h-3 bg-gray-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSkeleton;
