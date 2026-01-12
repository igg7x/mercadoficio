import { HTTP } from "../utils";
import { auth0 } from "../auth0";
type RequestParams<TBody = unknown>= {

    path : string ; 
    method : HTTP.GET | HTTP.POST | HTTP.PUT | HTTP.DELETE | HTTP.PATCH ;
    body  ? : TBody;
    token ?  : string ; 
}


export async function apiRequest<TResponse, TBody = unknown>({path, method, body, token} : RequestParams<TBody>) : Promise<TResponse> {

  try {
    const authToken  = (await auth0.getAccessToken()).token;
    console.log(authToken)
    // ⚠️ OJO: localStorage solo en cliente
    // const authToken =
    //   token || (typeof window !== "undefined" ? localStorage.getItem("authToken") : null);
    const response = await fetch(`${process.env.BACKEND_API_URL}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store", // si quieres evitar cache SSR
    });
    console.log(response)
    if (!response.ok) {
      let errorResponse: any;
      try {
        errorResponse = await response.json();
      } catch {
        errorResponse = { message: `Request failed with status ${response.status}` };
      }
      throw new Error(errorResponse.message);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return (await response.json()) as TResponse;
    }
    return null as TResponse;
  } catch (error: any) {
    console.error("Request error:", error);
    throw new Error(error.message || "Unknown error");
  }
}
    
