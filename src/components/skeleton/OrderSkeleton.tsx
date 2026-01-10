import React from "react";

const OrderSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      <div className="p-4 bg-white rounded shadow animate-pulse">
        <div className="w-1/3 h-6 mb-3 bg-gray-200 rounded" />
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded gap-4 bg-gray-50"
            >
              <div className="flex-1">
                <div className="w-1/3 h-4 mb-2 bg-gray-200 rounded" />
                <div className="w-1/2 h-3 bg-gray-100 rounded" />
              </div>
              <div className="w-24 h-4 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSkeleton;
