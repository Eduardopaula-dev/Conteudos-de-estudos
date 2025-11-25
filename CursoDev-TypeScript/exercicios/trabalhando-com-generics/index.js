/* # **Exercício - Trabalhando com Generics em TypeScript**

Neste exercício, você vai praticar o uso de **Generics** em **TypeScript**, criando funções que funcionam com diferentes tipos de dados de forma segura e reutilizável. O desafio consiste em criar uma função genérica que receba um array de qualquer tipo e exiba cada item no console.

`AVISO`: tente fazer sozinho primeiro, caso sinta necessidade pode consultar a resolução do exercício.

### **Objetivos do exercício**

- Criar uma função genérica em TypeScript.
- Definir um tipo genérico `<T>` que permita trabalhar com diferentes tipos de dados.
- Iterar sobre os elementos de um array.
- Exibir os itens no console.
- Testar a função com arrays de números e strings.

### **Sugestões de implementação**

- Use `<T>` na assinatura da função para declarar o tipo genérico.
- Defina o parâmetro como `T[]`, garantindo que seja um array do tipo recebido.
- Utilize o método `forEach` para percorrer os itens.
- Faça duas chamadas de teste: uma com números e outra com strings.

**Objetivo final:** reforçar o entendimento sobre **Generics em TypeScript**, permitindo criar funções mais flexíveis e reutilizáveis sem perder a segurança de tipos. */
function generics(item) {
    item.forEach(function (item) { return console.log(item); });
}
generics(["a", "b", "c"]);
generics([1, 2, 3]);
