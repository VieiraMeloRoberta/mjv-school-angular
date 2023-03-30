
function truthinessStringCheck(x: string | null | undefined) {
    if (x) {
        x // string
    } else {
        x // "" | null | undefined
    }
}


function truthinessNumberCheck(x: number | null | undefined) {
    if (x) {
        x // number
    } else {
        x // 0 | null | undefined
    }
}

function equalityCheck(x: "a" | "b" | null) {
    if (x === "a") {
        x // a
    }
    else if (x === "b") {
        x // b
    }
    else {
        x // null
    }

}


function inCheck(x: any[] | object) {
    // verifica se a propriedade existe no objeto para fins de afunilação de tipo
    if ("length" in x) {
        x // any[]
    } else {
        x // object
    }
}

export class User { }


function instanceOfCheck(x: User | string) {
    // verifica se x possui User em sua cadeia de prototype
    if (x instanceof User) {
        x // User
    } else {
        x // string
    }
}

function assignmentNarrowing(x: string | number) {
    x // string | number
    x = 10
    x // number
    x = ""
    x // string
}

// função de predicado - retorna true/false
function customTypeGuard(x: any): x is User {
    return x instanceof User
}

function checkWithCustomTypeGuard(x: User | null) {
    if (customTypeGuard(x)) {
        x // User
    } else {
        x // null
    }
}

function exhaustiveCheck(x: string | number) {
    switch (typeof x) {
        case 'string': {
            x // string
            break;
        }
        case 'number': {
            x // number
            break;
        }
        default: {
            x // never
        }
    }
}
