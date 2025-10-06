const LoadingSkeleton = ({ className = '', children }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
      {children}
    </div>
  )
}

const SkeletonCard = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <LoadingSkeleton className="h-48 mb-4" />
    <LoadingSkeleton className="h-6 mb-2" />
    <LoadingSkeleton className="h-4 mb-2 w-3/4" />
    <LoadingSkeleton className="h-4 w-1/2" />
  </div>
)

const SkeletonText = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <LoadingSkeleton 
        key={i} 
        className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} 
      />
    ))}
  </div>
)

LoadingSkeleton.Card = SkeletonCard
LoadingSkeleton.Text = SkeletonText

export default LoadingSkeleton