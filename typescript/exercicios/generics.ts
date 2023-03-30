// refatore esses tipos utilizando um tipo genérico

export type ItemTexto = {
    valor: string;
}

export type ItemNumerico = {
    valor: number;
}

export type Item<T> = {
    valor: T;
}