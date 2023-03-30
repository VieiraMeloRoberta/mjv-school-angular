// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
//function
/*
function obterInteresses(informacoes: MinhasInformacoes): string[] {
  return informacoes.interesses;
}
*/

// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.



const TypeParameters = <T, O>(objectA: T, objectB: O): T & O => {
  return {...objectA, ...objectB};
};