// Crie um mixin "named" e tipo "HasName" para adicionar as
// propriedades "firstName" e "lastName" de tipos string.
// Crie um outro mixin chamado "fullNamed" e tipo "HasFullName"
// que deverá adicionar um método "getFullName()" a um tipo qualquer que implemente "HasName"

export type Constructor<T = {}> = new (...args: any[]) => T;

type HasName = {
    firstName: string;
    lastName: string;
}
export function named<TBase extends Constructor>(base: TBase): TBase & Constructor<HasName>{
    return class extends base{
        firstName: string = '';
        lastName: string = '';
    }
}
class Person{

}
const NamedPerson = named(Person);
const namedPerson = new NamedPerson();

type HasFullName ={
    getFullName():string;
}
export function fullNamed<TBase extends Constructor<HasName>>(base: TBase): TBase & Constructor<HasFullName>{
    return class extends base{
        getFullName(){
            return `${this.firstName} ${this.lastName}`;

        }
    }
}
const FullNamedPerson = fullNamed(NamedPerson);
const fullNamedPerson = new FullNamedPerson();
fullNamedPerson.getFullName();