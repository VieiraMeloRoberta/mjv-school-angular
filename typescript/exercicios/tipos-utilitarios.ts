// Usando os tipos utilitários, substitua a implementação dos tipos usados pelas funções derivando do tipo User

export type User = {
    id: number;
    name: string;
    email: string;
}

// a função de createUser não precisa da propriedade "id", remova ela do tipo 
// UserSemId derivando ela a partir do tipo User.
export type UserSemId = {
    name: string;
    email: string;
};

export function createUser(user: Omit<User, 'UserSemId'>) {
    // .... nada a fazer aqui, só exemplificando um caso de uso
}

// a função update precisa do id do usuário e quaisquer outras
// propriedades para atualizar o usuário
export type UserComIdMasRestoOpcional = {
    id: number;
    name?: string;
    email?: string;
};

export function updateUser(user: Partial<User> & Required<Pick<User, 'id'>>) {
    // .... nada a fazer aqui, só exemplificando um caso de uso
}

// Somente a propriedade name
export type UserName = {
    name: string;
}

export function getUserName(user: Pick<User, 'name'>): string {
    return user.name;
}
