type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, addditional: string[]): string {
    return [
        cls,
        ...addditional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}