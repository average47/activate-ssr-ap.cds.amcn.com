import { NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

interface IEnvProps {
  [key: string]: string;
}

const { AUTHORIZATION_API_URL } = process.env as IEnvProps;

export async function POST(req: NextRequest) {
  const request = await req.json();
  const authorization = headers().get('x-authorization') as string;
  const body = JSON.stringify({
    email: request.email,
    password: request.password,
  });
  const fetchHeaders = {
    Accept: 'application/json',
    Authorization: `Bearer ${authorization}`,
    'Content-Type': 'application/json',
    'X-AMCN-DEVICE-ID': 'no-device-id',
    'X-AMCN-LANGUAGE': 'en',
    'X-AMCN-NETWORK': 'amcplus',
    'X-AMCN-PLATFORM': 'web',
    'X-AMCN-TENANT': 'amcn',
    'X-COUNTRY-CODE': 'us',
    'X-AMCN-SERVICE-ID': 'amcplus',
    'X-AMCN-SERVICE-GROUP-ID': '10',
  };
  const options = {
    method: 'POST',
    headers: fetchHeaders,
    body: body,
  };
  const response = await fetch(`${AUTHORIZATION_API_URL}/login`, options);
  if (response.status !== 200) {
    return NextResponse.json(
      { message: response.statusText },
      { status: response.status }
    );
  }
  const token = await response.json();
  return NextResponse.json(
    { message: token.data.access_token },
    { status: response.status }
  );
}

// cejdi6-capnub-Fyzcyz
