
export type Constructor<T = {}> = new (...args: any[]) => T;


export function identifiable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        id = Math.round(Math.random() * 99999999);
    }
}

const IdentifiableDate = identifiable(Date)

const identifiableDate = new IdentifiableDate()
identifiableDate.id


export interface NodeTyped {
    type: string;
}

export function changeableType<TBase extends Constructor<NodeTyped>>(base: TBase) {
    return class extends base {
        setType(t: string) {
            this.type = t;
        }
    }
}

export class Node<T extends string> implements NodeTyped {
    constructor(public readonly type: T) {

    }
}

export function timestampable<TBase extends Constructor>(base: TBase) {
    return class extends base {
        createdAt = new Date();
        updatedAt = new Date();

        setModified() {
            this.updatedAt = new Date();
        }
    }
}

export const IdentifiableNode = changeableType(identifiable(Node));

const idNode = new IdentifiableNode("square");
