import { NextRequest, NextResponse } from 'next/server';

interface IEnvProps {
  [key: string]: string;
}

const { AUTHORIZATION_API_URL } = process.env as IEnvProps;

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { error: 'Only POST requests allowed' },
      { status: 405 }
    );
  } else {
    const response = await fetch(`${AUTHORIZATION_API_URL}/unauth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AMCN-DEVICE-ID': 'no-device-id',
        'X-AMCN-LANGUAGE': 'en',
        'X-AMCN-NETWORK': 'amcplus',
        'X-AMCN-PLATFORM': 'web',
        'X-AMCN-TENANT': 'amcn',
        'X-COUNTRY-CODE': 'us',
      },
    });
    if (!response.ok) {
      return NextResponse.json({ status: response.status });
    }
    const res = await response.json();
    return NextResponse.json(res.data, { status: response.status });
  }
}
