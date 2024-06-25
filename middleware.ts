import createIntlMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@/app/navigation";
import { NextRequest } from "next/server";

const intlMiddleware = createIntlMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)",
  ],
};
