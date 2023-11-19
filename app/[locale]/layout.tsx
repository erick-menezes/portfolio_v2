import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Karla } from 'next/font/google'

import { LocaleProvider } from '@/providers/LocaleProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

import { Header } from '@/components/Header'

import '../globals.css'

const karla = Karla({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-karla',
})

export const metadata: Metadata = {
    title: 'Erick Menezes Silva - Portfolio',
    description: 'Web Developer Portfolio build with Next.js.',
}

const locales = ['en', 'pt']

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    if (!locales.includes(locale as any)) notFound()

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn('text-text', karla.variable)}>
                <LocaleProvider locale={locale}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <Header />
                        {children}
                    </ThemeProvider>
                </LocaleProvider>
            </body>
        </html>
    )
}
