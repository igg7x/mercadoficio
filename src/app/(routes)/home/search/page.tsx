// app/profile/page.tsx
import { auth0 } from "@/lib/auth0";
import SearchPage from "./components/search-client";

export default auth0.withPageAuthRequired( async function SearchPageServer() {
  return <SearchPage   />; // Aquí montamos el componente cliente
});
