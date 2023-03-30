export type MappedType = {
    [K in "prop1" | "prop2"]: K
}

export type User = {
    name: string;
    age: number;
}

export type MappedUser = {
    [K in keyof User]: User[K]
}

export type ModifiedUser = {
    readonly [K in keyof User]?: User[K] | null
}

export type MappedGeneric<T> = {
    [K in keyof T]: T[K]
}

export type MappedGenericCustomProps<T> = {
    [K in keyof T as `get${Capitalize<Extract<K, string>>}`]: () => T[K]
}

export type MappedGenericCustomPropsUser = MappedGenericCustomProps<User>
