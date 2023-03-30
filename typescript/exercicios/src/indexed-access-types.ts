export interface CourseSubject {
    id: number;
    name: string;
}

export interface Professor {
    name: string;
    age: number;
    subjects: CourseSubject[]
}

export type ProfessorName = Professor['name'] // string

export type ProfessorCourseSubjects = Professor['subjects'] //  CourseSubject[]

export type ProfessorCourseSubjectId = Professor['subjects'][number]['id'] // number

export type ProfessorNameAgeTypes = Professor['name' | 'age'] // string | number

export type ProfessorPropertyTypes = Professor[keyof Professor] // string | number | CourseSubject[]
