
// app/profile/page.tsx
import { auth0 } from "@/lib/auth0";
import EmpleosPortal  from "./components/jobs-client";
import { getJobsByUserCustomer } from "@/lib/api/jobs/jobs";

export default auth0.withPageAuthRequired( async function EmpleosPortalServer() {
  const jobsPage = await getJobsByUserCustomer();
  return <EmpleosPortal jobsPage={jobsPage} />; 
}); 
