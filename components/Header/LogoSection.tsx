import Image from 'next/image'
import Link from 'next/link'

interface LogoSectionProps {
    onChangeHash: (hashName: string | null) => void
}

export function LogoSection({ onChangeHash }: LogoSectionProps) {
    return (
        <div>
            <Link href="/" onClick={() => onChangeHash('')}>
                <Image
                    src="/assets/app_logo.png"
                    alt="Portfolio owner logo"
                    width={220}
                    height={60}
                    quality={100}
                    priority
                    className="hidden xl:block"
                />

                <Image
                    src="/assets/app_logo_small.png"
                    alt="Portfolio owner logo"
                    width={60}
                    height={60}
                    quality={100}
                    priority
                    className="xl:hidden"
                />
            </Link>
        </div>
    )
}
