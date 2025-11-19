function clientId(id) {
    console.log("O id do cliente \u00E9: ".concat(id));
}
clientId(23);
clientId("12");
//Exercicios
/* 📝 Exercício 1 — Verificar status
Crie uma função chamada verificarStatus que:
receba um valor que pode ser boolean OU string
retorne:
"OK" → se o valor for true
"ERRO" → se o valor for false
o próprio texto → se o valor for string
👉 Seu objetivo:
usar union type no parâmetro
usar tipagem no retorno(string)
usar condição baseada no tipo recebido */
function verificarStatus(status) {
    if (typeof status === "boolean") {
        return "Seu status está ok";
    }
    else {
        return "Seu status dando ERRO";
    }
}
console.log(verificarStatus(true));
/* 📝 Exercício 2 — Formatar valor
Crie uma função chamada formatarValor que:
receba um valor que pode ser number OU boolean
retorne uma string
se o valor for number → retorne "Número recebido: X"
se o valor for boolean → retorne "Valor booleano: true" ou "Valor booleano: false"
👉 Objetivos:
usar union type no parâmetro
usar type notation no retorno
treinar uso de typeof
Exemplo esperado:
formatarValor(20);        // "Número recebido: 20"
formatarValor(true);      // "Valor booleano: true"
 */
function formatarValor(valor) {
    if (typeof valor === "number") {
        return "N\u00FAmero recebido: ".concat(valor);
    }
    else {
        return "Valor Booleano: ".concat(valor);
    }
}
console.log(formatarValor(21));
console.log(formatarValor(false));
/* # Exercício - Usando Union Types em TypeScript

Neste exercício, você vai praticar o uso de **Union Types** em **TypeScript**, que permitem que uma variável possa assumir mais de um tipo. O desafio consiste em criar uma variável que aceite tanto números quanto strings, atribuindo valores diferentes em momentos distintos e exibindo-os no console.

### **Objetivos do exercício**

- Declarar uma variável com Union Types em TypeScript.
- Permitir que a variável aceite valores do tipo `number` e `string`.
- Atribuir valores diferentes em momentos distintos.
- Exibir os valores no console.

### **Sugestões de implementação**

- Use o operador `|` para declarar a variável com múltiplos tipos (`number | string`).
- Primeiro, atribua um valor numérico e exiba no console.
- Depois, atribua um valor string e também exiba no console.
- Utilize `console.log` para mostrar os dois resultados.
**Objetivo final:** reforçar o entendimento sobre como utilizar **Union Types em TypeScript** para lidar com variáveis que podem assumir mais de um tipo, mantendo a segurança de tipos. */
var valor;
valor = 231;
console.log("Valor num\u00E9rico: ".concat(valor));
valor = "João";
console.log("Valor de string: ".concat(valor));
