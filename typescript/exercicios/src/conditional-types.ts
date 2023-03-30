// remoção de tipos de uma união
export type RemoveStringAndNumber<T> = T extends string | number ? never : T

export type RemoveTest = string | number | string[] | boolean | null

export type TestRemoved = RemoveStringAndNumber<RemoveTest>


// inferência de tipo de dentro de tipo desconhecido
export type UnpackArray<T> =
    T extends Array<infer A>
    ? A
    : never;

export type Unpacked = UnpackArray<string[][][][][][][][][][]>;
export type Unpacked2 = UnpackArray<number>;
export type Unpacked3 = UnpackArray<any>;
export type Unpacked4 = UnpackArray<unknown>;

// recursividade
export type UnpackArrayRecursive<T> =
    T extends Array<infer A>
    ? A extends Array<any>
    ? UnpackArrayRecursive<A> : A
    : never;

export function createId(numeric: false): string
export function createId(numeric: true): number
export function createId(numeric: boolean) {
    const id = Math.floor(Math.random() * 99999)
    if (numeric) {
        return id; // number
    }
    return id.toString() // string
}

const idString = createId(false) // string | number
const idNumeric = createId(true) // number | number

export function createIdConditional<T extends boolean>(numeric: T): T extends true ? number : string {
    const id = Math.floor(Math.random() * 99999)
    if (numeric) {
        return id as any; // cast forçado a "any" devido a limitação do compilador
    }
    return id.toString() as any // cast forçado a "any" devido a limitação do compilador
}

const idString2 = createIdConditional(false) // string
const idNumeric2 = createIdConditional(true) // number




