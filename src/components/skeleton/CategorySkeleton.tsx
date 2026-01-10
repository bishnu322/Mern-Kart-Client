const RowSkeleton = () => (
  <div className="flex items-center px-2 py-3 gap-4">
    <div className="w-8 h-4 bg-gray-200 rounded-md" />
    <div className="flex-1 h-4 bg-gray-200 rounded-md" />
    <div className="hidden w-40 h-4 bg-gray-200 rounded-md md:block" />
    <div className="h-4 bg-gray-200 w-28 rounded-md" />
    <div className="h-4 bg-gray-200 w-28 rounded-md" />
    <div className="w-24 h-4 bg-gray-200 rounded-md" />
  </div>
);

const CategorySkeleton = () => {
  return (
    <div className="w-full">
      <div className="mt-4 overflow-hidden border rounded-t-lg">
        {/* header skeleton */}
        <div className="px-4 py-3 font-bold text-white bg-violet-600">
          <div className="w-48 h-4 bg-white/30 rounded-md animate-pulse" />
        </div>

        {/* rows */}
        <div className="p-2 bg-gray-100 space-y-2 animate-pulse">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="p-2 bg-white border border-gray-200 rounded-md"
            >
              <RowSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
