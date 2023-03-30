interface Point {
    x: number;
    y: number;
}

interface Point {
    z: number
}

type Named = {
    name: string;
}

// Interssection de Point com Named
type NamedPoint = Point & Named;

const namedPoint: NamedPoint = {
    name: "",
    x: 13,
    y: 20,
    z: 23
}
