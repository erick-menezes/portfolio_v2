interface StatInfoProps {
    value: string
    description: string
}

export function StatInfo({ value, description }: StatInfoProps) {
    return (
        <div className="flex gap-4 text-primary max-w-[240px] xl:max-w-xs">
            <span className="text-3xl xl:text-4xl">{value}</span>
            <span className="uppercase text-sm xl:text-base">{description}</span>
        </div>
    )
}
