
// app/profile/page.tsx
import { auth0 } from "@/lib/auth0";
import EmpleosPortal  from "./components/jobs-client";
export default auth0.withPageAuthRequired( async function EmpleosPortalServer() {
  return <EmpleosPortal />; 
}); 
