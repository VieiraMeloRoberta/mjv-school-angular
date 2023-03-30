// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
/*export type User = {
    name: string;
    email?: string;
    registered: boolean;
}
*/

export type UserRegistered = {
    name: string;
    email: string;
    registered: true;
  }
  

  export type User = UserRegistered 