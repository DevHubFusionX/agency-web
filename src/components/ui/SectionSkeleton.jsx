import LoadingSkeleton from './LoadingSkeleton'
import Section from './Section'

const SectionSkeleton = ({ className = "py-20 md:py-32" }) => {
    return (
        <Section className={className}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Skeleton */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <LoadingSkeleton className="h-8 w-32 rounded-full mb-6" />
                        <LoadingSkeleton className="h-16 w-3/4 rounded-2xl mb-4" />
                        <LoadingSkeleton className="h-16 w-1/2 rounded-2xl" />
                    </div>
                    <div className="space-y-4">
                        <LoadingSkeleton className="h-4 w-full" />
                        <LoadingSkeleton className="h-4 w-full" />
                        <LoadingSkeleton className="h-4 w-2/3" />
                    </div>
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-3xl p-8 border border-gray-100 bg-gray-50/50">
                            <LoadingSkeleton className="h-12 w-12 rounded-xl mb-6" />
                            <LoadingSkeleton className="h-8 w-2/3 mb-4" />
                            <div className="space-y-2">
                                <LoadingSkeleton className="h-4 w-full" />
                                <LoadingSkeleton className="h-4 w-full" />
                                <LoadingSkeleton className="h-4 w-3/4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default SectionSkeleton
