// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
/*export type User = {
    name: string;
    email?: string;
    registered: boolean;
}


export type UserRegistered = {
    name: string;
    email: string;
    registered: true;
  }
  

  export type User = UserRegistered */

  export type RegisteredUser = {
    name: string;
    email: string;
    registered: true;
}

export type GuestUser = {
    name: string;
    registered: false;
}

export type User = RegisteredUser | GuestUser

function testUser(user: User){
    if(user.registered){
        user.email
    }else {
        user
    }
}