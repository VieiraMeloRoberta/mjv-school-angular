// Usando os tipos utilitários, substitua a implementação dos tipos usados pelas funções derivando do tipo User

export type User = {
    id: number;
    name: string;
    email: string;
}

// a função de createUser não precisa da propriedade "id", remova ela do tipo 
// UserSemId derivando ela a partir do tipo User.
export type UserSemId = Omit<User,"id">;

export function createUser(user: UserSemId) {
    // .... nada a fazer aqui, só exemplificando um caso de uso
}

// a função update precisa do id do usuário e quaisquer outras
// propriedades para atualizar o usuário
export type UserComIdMasRestoOpcional = Pick<User, 'id'> & Partial<Omit<User, "id">>;
  


export function updateUser(user: UserComIdMasRestoOpcional) {
    // .... nada a fazer aqui, só exemplificando um caso de uso
}

// Somente a propriedade name
export type UserName = Pick<User, "name">

export function getUserName(user: UserName): string {
    return user.name;
}
