import { Job } from '@/lib/api/types'
import React from 'react'

const JobsList = ({jobs}:{jobs:Job[]}) => {
  return (
  <section className="[grid-area:main] flex items-center flex-col overflow-y-auto">
        <div className="flex flex-col  items-center mx-auto px-4 ">
          <div className="container grid grid-cols-1  p-3   max-[450px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoadingData ? (
              <Loading />
            ) : isError ? (
              <Error
                messaje={"Ups ! Ocurrio un error"}
                img={"/src/assets/images/undraw_server_down_s4lk.png"}
              />
            ) :jobs.length !== 0 ? (
              jobs.map((job) => (
                
                <JobCard key={job.jobId} canApply={false} job={job} />
              ))
            ) : (
              <Error
                messaje={"No se encontraron trabajos disponibles"}
                img={"/src/assets/images/undraw_People_search_re_5rre.png"}
              />
            )}
          </div>
        </div>
        <Pagination
          isDataExists={isLoadingData || isError}
          page={page}
          isPreviousData={isPreviousData}
          nextPage={nextPage}
          prevPage={prevPage}
          isDataLast={data?.last}
        />
      </section>
  )
}

export default JobsList