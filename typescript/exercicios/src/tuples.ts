type PairStrings = [string, string]

type PairStringNumber = [string, number]

type Pair<T1, T2> = [type1: T1, type2: T2]

type PairStringNumber2 = Pair<string, number>

type Triple<T1, T2, T3> = [T1, T2, T3]
const tripleStrings: Triple<string, string, string> = ['1', '', '']

type StringsThenNumber = [...string[], number]
const stringsThenNumber: StringsThenNumber = ['a', 'b', 'a', 'a', 5]

type ReadonlyTuple = readonly [string, number]
