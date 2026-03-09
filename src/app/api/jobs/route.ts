// app/api/jobs/route.ts
import { auth0 } from "@/lib/auth0";
import { NextRequest, NextResponse } from "next/server";

async function handleRequest(request: NextRequest, method: string) {
  try {
    const session = await auth0.getSession(); // 👈 sin parámetro
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const accessToken = session.tokenSet.accessToken; 
    if (!accessToken) {
      return NextResponse.json({ error: 'No access token' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');
    if (!path) {
      return NextResponse.json({ error: 'Path parameter is required' }, { status: 400 });
    }

    // Reenviar todos los searchParams excepto 'path' al backend
    const forwardedParams = new URLSearchParams(searchParams);
    forwardedParams.delete('path');
    const queryString = forwardedParams.toString();
    const backendUrl = `${process.env.BACKEND_API_URL}${path}${queryString ? `?${queryString}` : ''}`;

    let body = undefined;
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      try {
        body = await request.json();
      } catch { }
    }

    const backendResponse = await fetch(backendUrl, {
      method,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: backendResponse.status });

  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  return handleRequest(request, 'GET');
}

export async function POST(request: NextRequest) {
  return handleRequest(request, 'POST');
}

export async function PUT(request: NextRequest) {
  return handleRequest(request, 'PUT');
}

export async function DELETE(request: NextRequest) {
  return handleRequest(request, 'DELETE');
}

export async function PATCH(request: NextRequest) {
  return handleRequest(request, 'PATCH');
}