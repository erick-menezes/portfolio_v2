'use client'

import { useTheme } from 'next-themes'
import { usePathname, useRouter } from '@/navigation'
import { useEffect, useState, useTransition } from 'react'

import { Button } from '../ui/button'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Moon, Sun } from 'lucide-react'

interface AccessibilitySectionProps {
    hashName: string
}

export function AccessibilitySection({ hashName }: AccessibilitySectionProps) {
    const { setTheme, theme } = useTheme()

    function handleTheme() {
        const switchedTheme = theme === 'dark' ? 'light' : 'dark'

        localStorage.setItem('preferredTheme', switchedTheme)

        setTheme(switchedTheme)
    }

    return (
        <div className="flex xl:items-center xl:gap-4">
            <Button variant="ghost" size="icon" className="flex hover:bg-background-overlay" onClick={handleTheme}>
                <Sun className="text-[#F9DC5C] block dark:hidden" />
                <Moon className="text-zinc-50 hidden dark:block" />
            </Button>

            <LanguageSwitcher hashName={hashName} />
        </div>
    )
}
