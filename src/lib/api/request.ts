import { HTTP } from "../utils";
import { auth0 } from "../auth0";
type RequestParams<TBody = unknown>= {

    path : string ; 
    method : HTTP.GET | HTTP.POST | HTTP.PUT | HTTP.DELETE | HTTP.PATCH ;
    body  ? : TBody;
    token ?  : string ; 
    proxy ? : string ;
}


export async function apiRequest<TResponse, TBody = unknown>({path, method, body, token} : RequestParams<TBody>) : Promise<TResponse> {

  try {
    const authToken  = (await auth0.getAccessToken()).token;
   console.log(authToken)

    // ⚠️ OJO: localStorage solo en cliente
    // const authToken =
    //   token || (typeof window !== "undefined" ? localStorage.getItem("authToken") : null);
    const fullUrl = `${process.env.BACKEND_API_URL}${path}`;
    console.log('🌐 Making request to:', fullUrl);
    console.log('📝 Method:', method);

    const response = await fetch(fullUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store", // si quieres evitar cache SSR
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));
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

// Client-side API request (for React Query in client components)
export async function clientApiRequest<TResponse, TBody = unknown>(
  {path, method, body, token , proxy = "jobs"}: RequestParams<TBody>
): Promise<TResponse> {
  try {
    // For client-side requests, use the Next.js API proxy route
    // This allows the server to handle authentication
    const proxyUrl = `/api/${proxy}?path=${encodeURIComponent(path)}`;

    const response = await fetch(proxyUrl, {
      method: method, // Use the actual HTTP method
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      let errorResponse: any;
      try {
        errorResponse = await response.json();
      } catch {
        errorResponse = { message: `Request failed with status ${response.status}` };
      }
      console.log(errorResponse)
      throw new Error(errorResponse.message);
    }

    const data = await response.json();
    return data as TResponse;
  } catch (error: any) {
    console.error("Client request error:", error);
    throw new Error(error.message || "Unknown error");
  }
}
    
