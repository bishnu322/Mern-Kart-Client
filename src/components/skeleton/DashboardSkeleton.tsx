import React from "react";

const DashboardSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {/* top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 bg-white rounded shadow animate-pulse">
            <div className="w-3/4 h-6 mb-3 bg-gray-200 rounded" />
            <div className="w-1/2 h-8 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* charts / lists area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow col-span-2 animate-pulse">
          <div className="w-1/3 h-6 mb-4 bg-gray-200 rounded" />
          <div className="h-48 bg-gray-100 rounded" />
        </div>
        <div className="p-4 bg-white rounded shadow animate-pulse">
          <div className="w-1/2 h-6 mb-4 bg-gray-200 rounded" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-100 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
