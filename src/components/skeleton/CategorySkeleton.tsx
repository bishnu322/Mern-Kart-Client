const RowSkeleton = () => (
  <div className="flex items-center gap-4 py-3 px-2">
    <div className="w-8 h-4 bg-gray-200 rounded-md" />
    <div className="flex-1 h-4 bg-gray-200 rounded-md" />
    <div className="w-40 h-4 bg-gray-200 rounded-md hidden md:block" />
    <div className="w-28 h-4 bg-gray-200 rounded-md" />
    <div className="w-28 h-4 bg-gray-200 rounded-md" />
    <div className="w-24 h-4 bg-gray-200 rounded-md" />
  </div>
);

const CategorySkeleton = () => {
  return (
    <div className="w-full">
      <div className="mt-4 rounded-t-lg overflow-hidden border">
        {/* header skeleton */}
        <div className="bg-violet-600 text-white font-bold px-4 py-3">
          <div className="w-48 h-4 bg-white/30 rounded-md animate-pulse" />
        </div>

        {/* rows */}
        <div className="bg-gray-100 p-2 space-y-2 animate-pulse">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-md p-2 bg-white"
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
