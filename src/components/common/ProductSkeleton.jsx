function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden">

      <div className="h-72 bg-gray-300 dark:bg-gray-700"></div>

      <div className="p-5">

        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-4"></div>

        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-6"></div>

        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>

      </div>

    </div>
  );
}

export default ProductSkeleton;