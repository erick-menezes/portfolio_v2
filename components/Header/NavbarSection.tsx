'use client'

import { useEffect, useMemo } from 'react'
import NextLink from 'next/link'
import { Link } from '@/navigation'

import { useTranslations, useLocale } from 'next-intl'
import { useTheme } from 'next-themes'

export type LocaleType = 'pt' | 'en' | undefined

interface NavbarSectionProps {
    hashName: string
    onChangeHash: (hashName: string | null) => void
}

export function NavbarSection({ hashName, onChangeHash }: NavbarSectionProps) {
    const t = useTranslations('Index')
    const currentLocale = useLocale()

    const { theme } = useTheme()

    const navigationPaths = useMemo(
        () => [
            {
                id: 1,
                name: t('home'),
                goTo: '/',
                hashName: '',
                externalLink: false,
            },
            {
                id: 2,
                name: t('aboutMe'),
                goTo: '/#about-me',
                hashName: '#about-me',
                externalLink: false,
            },
            {
                id: 3,
                name: t('projects'),
                goTo: '/#projects',
                hashName: '#projects',
                externalLink: false,
            },
            {
                id: 4,
                name: t('contact'),
                goTo: '/#contact',
                hashName: '#contact',
                externalLink: false,
            },
            {
                id: 5,
                name: t('resume'),
                goTo: `/files/resume_${currentLocale ?? 'pt'}_${theme ?? 'light'}.pdf`,
                hashName: null,
                externalLink: true,
            },
        ],
        [t, currentLocale, theme],
    )

    useEffect(() => {
        if (window.location.hash) {
            onChangeHash(window.location.hash)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
                {navigationPaths.map((option) => {
                    return (
                        <li
                            className="font-medium uppercase text-text data-[active=true]:text-primary data-[active=true]:underline data-[active=true]:underline-offset-[6px]"
                            data-active={option.hashName !== null && hashName === option.hashName}
                            key={option.id}
                        >
                            {!option.externalLink ? (
                                <Link
                                    href={option.goTo}
                                    locale={option.hashName ? (currentLocale as LocaleType) : undefined}
                                    onClick={() => onChangeHash(option.hashName)}
                                    target={option.externalLink ? '_blank' : '_self'}
                                    rel={option.externalLink ? 'noreferrer' : ''}
                                    className="hover:text-primary"
                                >
                                    {option.name}
                                </Link>
                            ) : (
                                <NextLink
                                    href={option.goTo}
                                    onClick={() => onChangeHash(option.hashName)}
                                    target={option.externalLink ? '_blank' : '_self'}
                                    rel={option.externalLink ? 'noreferrer' : ''}
                                    className="hover:text-primary"
                                >
                                    {option.name}
                                </NextLink>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
