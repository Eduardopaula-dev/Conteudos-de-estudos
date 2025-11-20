var idCustumer;
idCustumer = 1211;
idCustumer = "wdqgqqfw";
var idProduct;
idProduct = "Sapato";
idProduct = 23.99;
var idCustumer2;
idCustumer2 = 1211;
idCustumer2 = "wdqgqqfw";
var idProduct2;
idProduct2 = "Sapato";
idProduct2 = 23.99;
function userStatus(User) {
    if (User === "online") {
        return "O usu\u00E1rio est\u00E1 ".concat(User);
    }
    else if (User === "offline") {
        return "O usu\u00E1rio est\u00E1 ".concat(User);
    }
    else {
        return "O usu\u00E1rio est\u00E1 ".concat(User);
    }
}
console.log(userStatus("busy"));
//Correção do meu código, na forma encurtada
function userStatus2(user) {
    return "O usu\u00E1rio est\u00E1 ".concat(user);
}
console.log(userStatus2("online"));
function notas(valor) {
    if (typeof valor === "number") {
        return "Nota num\u00E9rica: ".concat(valor);
    }
    else if (typeof valor === "string") {
        return "Status: ".concat(valor);
    }
}
console.log(notas("Aprovado"));
//Versão corrigida/encurtada
function notas2(valor) {
    return typeof valor === "number"
        ? "Nota num\u00E9rica: ".concat(valor)
        : "Status: ".concat(valor);
}
console.log(notas2("Reprovado"));
function mensagem(nota) {
    return typeof nota === "string"
        ? "Idade recebida: ".concat(nota)
        : "Mensagem recebida: ".concat(nota);
}
console.log(mensagem(18));
