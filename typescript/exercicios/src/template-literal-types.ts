export const Hello = `Hello`
export const World = 'World'
export const HelloWorld = `${Hello}  ${World}` as const

export type Hello = `Hello`;
export type World = `World`;
export type HelloWorld = `${Hello} ${World}`;



export type Icon = 'user' | 'www' | 'checkmark'
export type Size = 'small' | 'medium' | 'large';


export type IconSize = `${Icon}-${Size}`;



// types auxiliáres nativos do typescript
export type IconUppercase = Uppercase<Icon>;
export type IconLowercase = Lowercase<IconUppercase>;
export type IconCapitalized = Capitalize<Icon>;
export type IconUnCapitalized = Uncapitalize<IconCapitalized>;

export type User = {
    id: number;
    name: string;
}

export type UserOnChangedProps = `${keyof User}Changed`;

export type UserOnChangedEvent = {
    [event in UserOnChangedProps]: Function
}

export type UserOnChangedEvent2 = {
    [P in keyof User as `${P}Changed`]: (value: User[P]) => void
}

export type OnChangedEvent<T> = {
    [P in keyof T as `${Extract<P, string>}Changed`]: (value: T[P]) => void
}

export type UserOnChangedEvent3 = OnChangedEvent<User>


export type Trim<S extends string> =
    S extends ` ${infer T}` ? Trim<T> :
    S extends `${infer T} ` ? Trim<T> :
    S;


export type HelloWithSpaces = '    hello    '
export type T1 = Trim<HelloWithSpaces>;
