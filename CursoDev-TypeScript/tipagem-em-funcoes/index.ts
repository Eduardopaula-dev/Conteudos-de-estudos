function greet(name: string) {
    console.log(`Olá, ${name}`);
}

//greet(20);
greet("Ricardo")

function doubleNumber (number: number) : number {
    return number * 2
}

const result = doubleNumber(9);
console.log(result);


//Exercicio
/* 📝 Novo Exercício 1 — Converter número para string
Crie uma função chamada converterParaTexto, que:
receba um valor numérico(parâmetro tipado como number)
retorne esse valor convertido para string(retorno tipado como string) */

function converterParaTexto(valor: number) : string {
    return `O valor do número é: ${valor}`
}

console.log(converterParaTexto(23));


/* 📝 Exercício 2 — Calculadora simples
Crie uma função chamada multiplicar, que:
receba dois números (number, number)
retorne o resultado da multiplicação tipado como number */

function multiplicar(number1: number, number2: number) : number {
    return number1 * number2
}

const resultado = multiplicar(27, 34)
console.log(resultado);


/* 📝 Exercício 3 — Verificar login
Crie uma função chamada verificarLogin, que:
receba um usuário (string) e uma senha (string)
retorne um boolean dizendo se o login é válido ou não
⚠️ Aqui você só precisa retornar true ou false (não precisa criar lógica de verdade, só o retorno tipado). */

function verificarLogin(usuario: string, senha: string) : boolean {
    return true
}

console.log((verificarLogin("Felipe", "wfgfsbwgbwsfs")));
