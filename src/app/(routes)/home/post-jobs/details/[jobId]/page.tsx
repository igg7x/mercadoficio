import { getApplicantsByJobId } from "@/lib/api/jobs/jobs";
import { getJobById } from "@/lib/api/jobs/jobs";
import JobDetails from "./components/job-details";
import { Suspense } from "react";
type PageProps = {
    params: {
    jobId: string;
  };
};


export default async function JobDetailsPage({ params }: PageProps) {
  const { jobId } = params;
  // fetch del job por id (server o client según auth)
  const jobPromise =   getJobById(jobId);
  const applicantsPromise =  getApplicantsByJobId(jobId);
  const [job , applicants] = await Promise.all([jobPromise , applicantsPromise]);
  return (
    <Suspense fallback={<JobDetailsSkeleton />}>
      <JobDetails job={job} applications={applicants} />
    </Suspense>
  );
}

function JobDetailsSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-slate-200 rounded w-1/3" />
      <div className="h-4 bg-slate-200 rounded w-2/3" />
      <div className="h-32 bg-slate-200 rounded" />
    </div>
  );
}

