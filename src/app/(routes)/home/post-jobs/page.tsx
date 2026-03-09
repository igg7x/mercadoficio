import { auth0 } from "@/lib/auth0";
import JobsPortalShell from "./components/jobs-portal-shell";
import { 
  getJobsStatsByUserCustomer 
} from "@/lib/api/jobs/jobs";
import { getCategories } from "@/lib/api/categories/categories";

export default async function JobsPage() {
    const [stats, categories] = await Promise.all([
      // getJobsStatsByUserCustomer(),
      getCategories(),
    ]);

    return (
      <JobsPortalShell
        // stats={stats}k
        categories={categories}
      />
    );
  }