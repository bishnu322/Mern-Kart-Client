import React from "react";

const UserSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 w-full">
      <div className="bg-white rounded shadow p-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-3" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="w-40 h-4 bg-gray-200 rounded" />
              </div>
              <div className="w-24 h-4 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
