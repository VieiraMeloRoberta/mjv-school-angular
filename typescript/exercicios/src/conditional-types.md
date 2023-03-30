# Typescript Avançado - Conditional Types

Podemos gerar outros tipos de acordo com uma determinada condição, similar a um operador ternário no javascript.

Um tipo condicional é composto pelo Tipo a ser verificado, seguido da palavra chave `extends` e um segundo tipo, que verifica se o primeiro tipo faz parte do segundo tipo. Depois temos o simbolo de interrogação seguindo pelo tipo resultante caso a condição seja verdadeira, e dois ponto seguindo do tipo resultando caso a condição seja negativa.

A palavra chave infer pode ser usada dentro de blocos de tipos condicionais para criar novas variáveis de tipo a partir da inferência de tipo do Typescript.
