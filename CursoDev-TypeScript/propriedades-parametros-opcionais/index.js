var newCustumer = {
    firstName: "João",
    lastName: "Nascimento",
    age: 29
};
console.log(newCustumer);
var newCustumer2 = {
    firstName: "João",
    age: 29
};
console.log(newCustumer2);
//Tbm o parametro opcional é passado para função
function printName(firstName, lastName) {
    console.log("O primeiro nome \u00E9: ".concat(firstName));
}
;
printName("João");
function printLivro(livro) {
    console.log("T\u00EDtulo do livro: ".concat(livro.titulo));
    console.log("Autor: ".concat(livro.autor));
    console.log("Ano Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
    //Caso precise verificar se é undefined ---> if (livro.edicao !== undefined)
    if (livro.edicao) {
        console.log("Edi\u00E7\u00E3o: ".concat(livro.edicao));
    }
    else {
        console.log("Edição não informada");
    }
}
printLivro({ titulo: "Harry Potter", autor: "J. K.", anoPublicacao: 2001 });
//Versão encurtada/melhorada
function printLivro2(livro) {
    var _a;
    console.log("T\u00EDtulo: ".concat(livro.titulo));
    console.log("Autor: ".concat(livro.autor));
    console.log("Ano: ".concat(livro.anoPublicacao));
    console.log("Edi\u00E7\u00E3o: ".concat((_a = livro.edicao) !== null && _a !== void 0 ? _a : "Não informada"));
}
printLivro2({ titulo: "Percy Jackson", autor: "Rick Riordan", anoPublicacao: 2005, edicao: 1 });
/* 📝 Exercício 2 — Parâmetro opcional na função

Crie uma função chamada saudar que receba:
nome (string)
saudacao? (string — opcional)

Se a saudação existir → use ela.
Se não existir → use "Olá" como padrão.

Exemplos esperados (não faça o código agora, só para entender o que deve acontecer):
saudar("Ana") → "Olá, Ana"
saudar("João", "Bom dia") → "Bom dia, João" */
function saudar(nome, saudacao) {
    if (saudacao !== undefined) {
        console.log("".concat(saudacao, ", ").concat(nome));
    }
    else {
        console.log("Ol\u00E1, ".concat(nome));
    }
}
saudar("João");
saudar("Ana", "Bom dia, ");
//Versão curta/melhorada 
function saudar2(nome, saudacao) {
    if (saudacao === void 0) { saudacao = "Olá"; }
    console.log("".concat(saudacao, ", ").concat(nome));
}
saudar2("Diogo"); // Usa "Olá"
saudar2("Marcos", "Bom dia"); // Usa "Bom dia"
function printFilme(infoFilme) {
    var _a, _b;
    console.log("Filme: ".concat(infoFilme.nome));
    console.log("Diretor: ".concat(infoFilme.diretor));
    console.log("Ano: ".concat((_a = infoFilme.ano) !== null && _a !== void 0 ? _a : "Não informado"));
    console.log("Genero: ".concat((_b = infoFilme.genero) !== null && _b !== void 0 ? _b : "Não informado"));
}
;
printFilme({ nome: "Transformers", diretor: "Michael Bay" });
printFilme({ nome: "Piratas do Caribe", diretor: "Gore Verbinski", ano: 2003, genero: "Aventura" });
