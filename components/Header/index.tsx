'use client'

import { useState } from 'react'

import { LogoSection } from './LogoSection'
import { NavbarSection } from './NavbarSection'
import { AccessibilitySection } from './AccessibilitySection'
import { MobileMenuBarButton } from './MobileMenuBarButton'

export function Header() {
    const [pathHash, setPathHash] = useState('')

    function handleHashNavigation(hashName: string | null) {
        if (hashName === null) return

        setPathHash(hashName)
    }

    return (
        <header className="flex justify-between items-center h-28 px-8">
            <LogoSection onChangeHash={handleHashNavigation} />

            <NavbarSection hashName={pathHash} onChangeHash={handleHashNavigation} />

            <div className="flex gap-1">
                <AccessibilitySection hashName={pathHash} />
                <MobileMenuBarButton hashName={pathHash} onChangeHash={handleHashNavigation} />
            </div>
        </header>
    )
}
