# Typescript Avançado - Mapped Types

Muitas vezes precisamos gerar as propriedades de um novo tipo a partir de um tipo existente, e para isso podemos fazer uso de mapped types, que é um tipo de iteração que podemos fazer em uniões de tipo.

sintaxe similar ao for-in para iterar em chaves de um objeto mas aqui iteramos nos tipos de uma união, e geramos uma variável de tipo "K",que pode ser usada e manipulada no resto do tipo.

Geralmente a união de tipo é gerada a partir do uso de `keyof` em um outro tipo.
