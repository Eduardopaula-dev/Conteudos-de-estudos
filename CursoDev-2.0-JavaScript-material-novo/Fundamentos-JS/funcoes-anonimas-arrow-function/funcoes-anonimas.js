saudacao2()

const saudacao = function() {
    console.log("Olá, tudo bem?");
}

saudacao()

//Função nomeada - sofre hoisting, ou seja ela pode ser chamada antes de ser declarada
function saudacao2() {
    console.log("Olá, tudo bem?");
}

// Arrow functions

const saudacao3 = () => {
    console.log("Olá, tudo bem?");
}

saudacao3()