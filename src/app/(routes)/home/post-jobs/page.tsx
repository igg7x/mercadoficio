import { auth0 } from "@/lib/auth0";
import JobsPortalShell from "./components/jobs-portal-shell";
import { 
  getJobsHistorialByUserCustomer, 
  getJobsByUserCustomer, 
  getJobsStatsByUserCustomer 
} from "@/lib/api/jobs/jobs";
import { getCategories } from "@/lib/api/categories/categories";

export default async function JobsPage({ searchParams }: { 
    searchParams: Promise<{ activePage?: string; historyPage?: string }> 
  }) {
    const params = await searchParams;
    const activePage = Number(params.activePage) || 0;
    const historyPage = Number(params.historyPage) || 0;

    const [pageActiveJobs, pageHistorialJobs, stats, categories] = await Promise.all([
      getJobsByUserCustomer(activePage),
      getJobsHistorialByUserCustomer(historyPage), // ✅ Agregar parámetro de página
      getJobsStatsByUserCustomer(),
      getCategories(),
    ]);

    return (
      <JobsPortalShell
        pageActiveJobs={pageActiveJobs}
        pageHistorialJobs={pageHistorialJobs}
        stats={stats}
        categories={categories}
      />
    );
  }