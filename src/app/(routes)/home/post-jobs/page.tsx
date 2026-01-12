import { auth0 } from "@/lib/auth0";
import JobsPortalShell from "./components/jobs-portal-shell";
import { getJobsHistorialByUserCustomer , getJobsByUserCustomer  , getJobsStatsByUserCustomer} from "@/lib/api/jobs/jobs";
import { getCategories } from "@/lib/api/categories/categories";


export default auth0.withPageAuthRequired( async function JobsPage() {

  const [pageActiveJobs, pageHistorialJobs ,stats, categories] = await Promise.all([
    getJobsByUserCustomer(),
    getJobsHistorialByUserCustomer(),
    getJobsStatsByUserCustomer(),
    getCategories(),
  ])
  return ( 
    <JobsPortalShell pageActiveJobs={pageActiveJobs} pageHistorialJobs={pageHistorialJobs} stats={stats} categories={categories} />
  );
  }); 

