function showCustomerInfo(custumer) {
    console.log("O nome do cliente \u00E9: ".concat(custumer.name));
    console.log("A idade do cliente \u00E9: ".concat(custumer.age));
}
showCustomerInfo({ name: "João", age: 11 });
function mostrarProduto(produto) {
    console.log("Produto: ".concat(produto.nome));
    console.log("Pre\u00E7o: ".concat(produto.preco));
    console.log("Em estoque: ".concat(produto.emEstoque));
}
mostrarProduto({ nome: "Camiseta", preco: 69.99, emEstoque: false });
function descricaoCarro(descricao) {
    console.log("A marca do carro \u00E9: ".concat(descricao.marca));
    console.log("O ano: ".concat(descricao.marca));
    console.log("Cor: ".concat(descricao.cor));
}
descricaoCarro({ marca: "Hilux", ano: 2019 });
descricaoCarro({ marca: "Palio", ano: 2014, cor: "Vermelho" });
//Versão corrigida
function descricaoCarro2(descricao) {
    console.log("A marca do carro \u00E9: ".concat(descricao.marca));
    console.log("O ano: ".concat(descricao.ano));
    if (descricao.cor) {
        console.log("Cor: ".concat(descricao.cor));
    }
    else {
        console.log("Cor não informada");
    }
}
descricaoCarro2({ marca: "Hilux", ano: 2019 });
descricaoCarro2({ marca: "Palio", ano: 2014, cor: "Vermelho" });
function mostrarPessoa(pessoa) {
    console.log("Nome: ".concat(pessoa.nome));
    console.log("O Endere\u00E7o \u00E9: rua: ".concat(pessoa.endereco.rua, " e o numero \u00E9: ").concat(pessoa.endereco.numero));
}
mostrarPessoa({ nome: "Felipe", endereco: { rua: "Tal, Tal", numero: 231 } });
//Forma mais organizada
function mostrarPessoa2(pessoa) {
    console.log("Nome: ".concat(pessoa.nome));
    console.log("Endere\u00E7o: ".concat(pessoa.endereco.rua, ", n\u00BA ").concat(pessoa.endereco.numero));
}
mostrarPessoa2({ nome: "Felipe", endereco: { rua: "Tal, Tal", numero: 231 } });
