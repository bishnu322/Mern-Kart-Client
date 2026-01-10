import React from "react";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 bg-white rounded shadow animate-pulse">
            <div className="h-40 mb-3 bg-gray-200 rounded" />
            <div className="w-3/4 h-4 mb-2 bg-gray-200 rounded" />
            <div className="w-1/2 h-3 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
