import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { i18n } from "@/i18n.config";
 
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string | undefined {
    
    const negotiatorHeaders: Record<string,string > = {};
    request.headers.forEach((value,key) => (negotiatorHeaders[key] = value))

    const locales: string[] = i18n.locales;
    const languages = new Negotiator({
        headers:negotiatorHeaders,
    }).languages();

    const locale = matchLocale(languages,locales,i18n.defaultLocale);
    return locale
 }
 
export function middleware(request:NextRequest) {
  // Check if there is any supported locale in the pathname
  const  pathname  = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => 
    !pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );


 
  if (
    pathnameIsMissingLocale &&
    pathname !== "/robots.txt" &&
    pathname !== "sitemap.xml"
  ) {
    const locale = getLocale(request);
    return NextResponse.redirect(
        new URL (
            `/${locale}${pathname.startsWith("/") ? "" : "/" }${pathname}`,
            request.url
        )
    )
  }
 
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|icon.png|images|icons).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}