const ProductCardSkeleton = () => {
  return (
    <div className="w-[280px] border border-gray-200 rounded-lg p-4 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>

      {/* Title skeleton */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>

      {/* Price and button skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-6 bg-gray-300 rounded w-20"></div>
        <div className="h-10 bg-gray-300 rounded w-24"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
