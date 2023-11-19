import createMiddleware from 'next-intl/middleware'
import { locales } from './navigation'

export default createMiddleware({
    defaultLocale: 'en',
    locales,
})

export const config = {
    matcher: ['/(pt|en)/((?!files).*):path*', '/((?!api|_next|_vercel|public|files|.*\\..*).*)'],
}
