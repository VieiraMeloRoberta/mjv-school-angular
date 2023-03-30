export interface CacheById {
    [id: string]: any
}

const cache: CacheById = {
    'abc': "alan",
    'dfg': "nathan",
    "mjv": 123,
}


export type PersonType = "professor" | "student" | "admin"

export type CacheByUnion = {
    [P in PersonType]: any
}

const cacheByUnion: CacheByUnion = {
    admin: "abc",
    professor: 123,
    student: {},
}
