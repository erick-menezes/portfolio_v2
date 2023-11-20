import { useEffect, useMemo, useState } from 'react'

import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { LocaleType } from './NavbarSection'
import { Link } from '@/navigation'
import NextLink from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'

interface MobileMenuBarButtonProps {
    hashName: string
    onChangeHash: (hashName: string | null) => void
}

export function MobileMenuBarButton({ hashName, onChangeHash }: MobileMenuBarButtonProps) {
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

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (window.location.hash) {
            onChangeHash(window.location.hash)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleLanguageChange(hashName: string | null) {
        onChangeHash(hashName)

        setOpen(false)
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden" asChild>
                <Button variant="ghost" size="icon" className="hover:bg-background-overlay">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="h-full" side="bottom">
                <nav className="mt-12">
                    <ul className="flex flex-col w-full">
                        {navigationPaths.map((option) => {
                            return (
                                <li
                                    className="font-medium uppercase text-text data-[active=true]:text-primary data-[active=true]:underline data-[active=true]:underline-offset-[6px] h-12 flex"
                                    data-active={option.hashName !== null && hashName === option.hashName}
                                    key={option.id}
                                >
                                    {!option.externalLink ? (
                                        <Link
                                            href={option.goTo}
                                            locale={option.hashName ? (currentLocale as LocaleType) : undefined}
                                            onClick={() => handleLanguageChange(option.hashName)}
                                            target={option.externalLink ? '_blank' : '_self'}
                                            rel={option.externalLink ? 'noreferrer' : ''}
                                            className="w-full hover:text-primary"
                                        >
                                            {option.name}
                                        </Link>
                                    ) : (
                                        <NextLink
                                            href={option.goTo}
                                            onClick={() => handleLanguageChange(option.hashName)}
                                            target={option.externalLink ? '_blank' : '_self'}
                                            rel={option.externalLink ? 'noreferrer' : ''}
                                            className="w-full hover:text-primary"
                                        >
                                            {option.name}
                                        </NextLink>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <LanguageSwitcher isMobile hashName={hashName} className="mt-2" />
            </SheetContent>
        </Sheet>
    )
}
