// Coloque os três argumentos de tipo na função e use-os para tipar cada um dos argumentos. 
// O primeiro tipo deve ser o tipo do objeto a ser editado
// o segundo tipo deve ser uma das propriedades do tipo do objeto
// o terceiro tipo deve ser o tipo de valor que essa propriedade do objeto aceita
/*export function editProperty(obj: any, property: string, value: any): void {
    obj[property] = value
}*/


function editProperty<Tbase, Kbase extends keyof Tbase, Vbase extends Tbase[Kbase]>(obj: Tbase, property: Kbase, value: Vbase): void {
    obj[property] = value
}
editProperty({ nome: "alan" }, "nome", "a")
