import { Job, Page } from '@/lib/api/types'
import React from 'react'
import Pagination from '../../components/pagination'
import JobCard from './job-card'
import JobCardSkeleton from './job-card-skeleton'

interface JobsListProps {
  isLoading?: boolean;
  isError?: boolean;
  jobs?: Job[];
  jobsPage?: Page<Job>;
  pageType: "active" | "history";
  onNextPage: () => void;
  onPrevPage: () => void;
  currentPage: number;
}

const JobsList = ({ 
  isLoading, 
  isError, 
  jobs, 
  jobsPage, 
  pageType,
  onNextPage,
  onPrevPage,
  currentPage,
}: JobsListProps) => {
  if (isLoading) {
    // Show skeleton cards while loading
    return (
      <section className="[grid-area:main] flex items-center flex-col overflow-y-auto">
        <div className="flex flex-col items-center mx-auto px-4">
          <div className="container grid grid-cols-1 p-3 max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <JobCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex items-center justify-center py-12">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-2">Error al cargar trabajos</p>
          <p className="text-slate-600 text-sm">Intenta recargando la página</p>
        </div>
      </section>
    );
  }

  const jobsToDisplay = jobs || jobsPage?.content || [];

  if (jobsToDisplay.length === 0) {
    return (
      <section className="flex items-center justify-center py-12">
        <div className="text-center">
          <p className="text-slate-600 font-semibold">No hay trabajos disponibles</p>
        </div>
      </section>
    );
  }

  return (
    <section className="[grid-area:main] flex items-center flex-col overflow-y-auto">
      <div className="flex flex-col items-center mx-auto px-4 w-full">
        <div className="container grid grid-cols-1 p-3 max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {jobsToDisplay.map((job) => (
            <JobCard key={job.jobId} job={job} />
          ))}
        </div>
      </div>
      
      {jobsPage && (
        <Pagination
          currentPage={jobsPage.number}
          isLastPage={jobsPage.last}
          isFirstPage={jobsPage.first}
          totalPages={jobsPage.totalPages}
          pageType={pageType}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
        />
      )}
    </section>
  )
}

export default JobsList