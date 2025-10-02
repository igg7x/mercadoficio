
// app/profile/page.tsx
import { auth0 } from "@/lib/auth0";
import JobsPortal from "./components/postjobs-client";
export default auth0.withPageAuthRequired( async function JobsPortalServer() {
  return <JobsPortal />; 
}); 
