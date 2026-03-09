
// app/profile/page.tsx
import { auth0 } from "@/lib/auth0";
import EmpleosPortal  from "./components/jobs-client";
import { getCategories } from "@/lib/api/categories/categories";

export default auth0.withPageAuthRequired(async function EmpleosPortalServer() {
  const categories = await getCategories();
  return <EmpleosPortal categories={categories} />;
}); 
