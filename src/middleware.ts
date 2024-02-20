import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import {
  getHostname,
  type IEnvProps,
  AuthResponseProps,
  SessionParams,
} from '@/lib';
import partners from '../public/data/partners.json';

const { GEOLOCATION_URL } = process.env as IEnvProps;

interface MyObjectWithIndex {
  [key: string]: { destination: string; permanent: boolean };
}

export async function middleware(request: NextRequest) {
  // const pathname = request.nextUrl.pathname;
  // if (pathname.includes('/activate')) {
  //   return NextResponse.next();
  // }
  // const currentHost = request.headers
  //   .get('host')
  //   ?.split('.')
  //   .slice(-2)
  //   .join('.');

  // const location = await (await fetch(GEOLOCATION_URL)).json();
  // const network = await getHostname(currentHost);
  // const authentication = (await (
  //   await fetch(new URL('/api/unauth', request.url), {
  //     method: 'POST',
  //   })
  // ).json()) as AuthResponseProps;
  // const session = {
  //   geolocation: location.data.geolocation,
  //   networkPath: network?.networkPath,
  //   token: authentication.access_token,
  // } as SessionParams;
  // if (pathname in partners) {
  //   const redirectEntry = partners[pathname];
  //   const statusCode = redirectEntry.permanent ? 308 : 307;
  //   const response = NextResponse.redirect(
  //     new URL(redirectEntry.destination, request.nextUrl.origin),
  //     statusCode
  //   );
  //   session.partner = redirectEntry.value;
  //   response.cookies.set({
  //     name: 'session',
  //     value: JSON.stringify(session),
  //     path: '/',
  //   });
  // }
  // return response;
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'],
};
