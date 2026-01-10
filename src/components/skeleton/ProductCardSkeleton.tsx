const ProductCardSkeleton = () => {
  return (
    <div className="w-[280px] border border-gray-200 rounded-lg p-4 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 mb-4 bg-gray-300 rounded-lg"></div>

      {/* Title skeleton */}
      <div className="w-3/4 h-6 mb-3 bg-gray-300 rounded"></div>

      {/* Description skeleton */}
      <div className="mb-4 space-y-2">
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Price and button skeleton */}
      <div className="flex items-center justify-between">
        <div className="w-20 h-6 bg-gray-300 rounded"></div>
        <div className="w-24 h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
