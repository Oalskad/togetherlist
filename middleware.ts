import { NextRequest, NextResponse } from 'next/server';
import { getCookies } from 'cookies-next';
import { cookies } from 'next/headers';

const publicPath = [
  '/sidebar',
  '/home',
  '/home/*',
  '/',
  '/auth',
  '/auth/login',
  '/auth/signup',
  '/auth/forgot-password',
  '/auth/reset-password',
];
const privatePath = ['/workspace/*'];

export function middleware(req: NextRequest) {
  const cookiess = getCookies({ cookies });
  console.log(cookiess, 'asdasd');

  console.log(cookies);
  // Get the path of the request
  const path = req.nextUrl.pathname;

  // Check if the path is a public path
  const isPublicRoute = publicPath.includes(path);

  //Get cookie
  const cookie = req.cookies.get('sessionToken');

  if (!isPublicRoute && !cookie) {
    return NextResponse.redirect(new URL('/auth', req.nextUrl));
  }

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL('/workspace', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};