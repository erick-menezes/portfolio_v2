import type { PropsWithChildren } from 'react'

import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

type ProviderWrapperProps = PropsWithChildren & {
    locale: string
}

export async function LocaleProvider({ children, locale }: ProviderWrapperProps) {
    let messages

    try {
        messages = (await import(`../messages/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}
