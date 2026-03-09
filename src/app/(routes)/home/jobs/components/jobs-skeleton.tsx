import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'

const JobSkeleton = () => (
  <Card className="border-0 shadow-md">
    <CardContent className="p-4 sm:p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-5 w-16" />
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>

          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-3 sm:mb-4" />

          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-14" />
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0 md:ml-4">
          <Skeleton className="h-9 w-20" />
          <div className="flex gap-1">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)
export default JobSkeleton