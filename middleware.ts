import { NextRequest, NextResponse } from 'next/server';
import { getCookies } from 'cookies-next';
import { cookies } from 'next/headers';

const publicPath = [
  '/sidebar/*',
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

  // Get the path of the request
  const path = req.nextUrl.pathname;

  // Check if the path is a public path
  // const isPublicRoute = publicPath.includes(path);
  const isPublicRoute = publicPath.some((publicPath) => {
    const regex = new RegExp(`^${publicPath.replace('*', '.*')}$`);
    return regex.test(path);
  });

  //Get cookie
  const cookie = cookiess?.clientSessionToken;
  console.log(cookie);

  if (!isPublicRoute && !cookie) {
    return NextResponse.redirect(new URL('/auth', req.nextUrl));
  }

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL('/workspace', req.nextUrl));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
