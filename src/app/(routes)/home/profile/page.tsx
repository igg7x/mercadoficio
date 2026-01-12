// app/profile/page.tsx
import { auth0 } from "@/lib/auth0";
import ProfilePage from "./components/profile-client";
import { UserSession } from  "@/lib/api/types";

export default auth0.withPageAuthRequired( async function ProfilePageServer() {
  const session = await auth0.getSession();
  const user = session?.user;
  if (!user) {
    throw new Error("User not found in session.");
  }
  return <ProfilePage  user={user as UserSession} />; // Aquí montamos el componente cliente
});
