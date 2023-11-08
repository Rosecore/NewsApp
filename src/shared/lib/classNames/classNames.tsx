export type Mods = Record<string, boolean|string|undefined>


export function classNames(cls: string, mods : Mods ={}, adds: Array<string|undefined> = []) : string{
    return [
        cls,
        ...adds,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className])=> className)
    ].join(' ')
}