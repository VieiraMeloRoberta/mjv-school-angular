// refatore esses tipos utilizando um tipo genérico

/*export type ItemTexto = {
    valor: string;
}

export type ItemNumerico = {
    valor: number;
}

export type Item<T> = {
    valor: T;
}
*/

export type Item<T> = {
    valor: T;
}

export type ItemTexto = Item<string>

export type ItemNumerico = Item<number>

