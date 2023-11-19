import { useEffect, useState, useTransition } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

import { Globe } from 'lucide-react'
import { usePathname, useRouter } from '@/navigation'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
    hashName: string
    isMobile?: boolean
    className?: string
}

export function LanguageSwitcher({ hashName, isMobile, className }: LanguageSwitcherProps) {
    const pathname = usePathname()
    const router = useRouter()

    const [_, startTransition] = useTransition()

    const [defaultLocale, setDefaultLocale] = useState('en')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDefaultLocale(localStorage.getItem('preferredLanguage') || 'en')
        }
    }, [])

    function handleLanguage(language: string) {
        localStorage.setItem('preferredLanguage', language)

        setDefaultLocale(language)

        startTransition(() => {
            router.replace(`${pathname}${hashName}`, { locale: language })
        })
    }

    return (
        <Select defaultValue={defaultLocale} onValueChange={(value) => handleLanguage(value)} value={defaultLocale}>
            <SelectTrigger
                data-mobile={isMobile}
                className={cn(
                    'hidden lg:flex w-[60px] xl:w-[200px] border-none shadow-none text-link font-medium data-[mobile=true]:flex',
                    className,
                )}
            >
                <Globe />
                <div className="hidden xl:block">
                    <SelectValue placeholder="Selecione um idioma" />
                </div>
            </SelectTrigger>
            <SelectContent className="dark:bg-background-overlay">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português (Brasil)</SelectItem>
            </SelectContent>
        </Select>
    )
}
