import { Job, Page } from '@/lib/api/types'
import React from 'react'
import Pagination from '../../components/pagination'
import JobCard from './job-card'

interface JobsListProps {
  pageActiveJobs?: Page<Job>;
  pageHistorialJobs?: Page<Job>;
}

const JobsList = ({ pageActiveJobs, pageHistorialJobs }: JobsListProps) => {
  // ✅ Determinar qué página mostrar
  const pageJobs = pageActiveJobs || pageHistorialJobs;
  const pageType = pageActiveJobs ? "active" : "history";

  if (!pageJobs) return null;

  return (
    <section className="[grid-area:main] flex items-center flex-col overflow-y-auto">
      <div className="flex flex-col items-center mx-auto px-4">
        <div className="container grid grid-cols-1 p-3 max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {pageJobs.content.map((job) => (
            <JobCard key={job.jobId}  job={job} />
          ))}
        </div>
      </div>
      
      <Pagination
        currentPage={pageJobs.number}
        isLastPage={pageJobs.last}
        isFirstPage={pageJobs.first}
        totalPages={pageJobs.totalPages}
        pageType={pageType} // ✅ Pasar el tipo
      />
    </section>
  )
}

export default JobsList