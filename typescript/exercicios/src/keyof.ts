export interface Professor {
    name: string;
    age: string;
}

type ProfessorProperties = keyof Professor // name | age

const professorProperties: ProfessorProperties = 'name'
