# Typescript Avançado - Narrowing (Afunilamento)

O Typescript consegue analizar o fluxo de código e afunilar o tipo de determinavas variáveis ao detectar checagens que conseguem validar os tipos ou novas atribuições à variável.

O tipo mais comum de afunilamento é o afunilamento por checagem de truthiness, que é a checagem do javascript para verificar se uma variável qualquer pode ser convertida para true ou false.

Quando o Typescript não consegue afunilar o tipo da variável para um tipo válido, é então atribuido o tipo never, indicando uma situação que não deve ocorrer.
