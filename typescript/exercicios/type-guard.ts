export interface GuestUser {
    type: 'guest';
    name: string;
}

export interface AuthenticatedUser {
    type: 'user';
    id: string;
    name: string;
}

export type User = GuestUser | AuthenticatedUser;

// Crie uma função de type-guard que sirva para afunilar o tipo específico de User
function isAuthenticated (user: GuestUser | AuthenticatedUser): user is AuthenticatedUser{
    return 'id' in user;
}