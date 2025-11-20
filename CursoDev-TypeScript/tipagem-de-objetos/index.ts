type Custumer = {
    name: string;
    age: number;
}

function showCustomerInfo(custumer : Custumer) {
    console.log(`O nome do cliente é: ${custumer.name}`);
    console.log(`A idade do cliente é: ${custumer.age}`);
}

showCustomerInfo({name: "João", age: 11});



//< ------------- Exercícios --------------- >

/* 🔹 Exercício 1 — Tipar um objeto simples

Crie um tipo chamado Produto com as propriedades:
nome (string)
preco (number)
emEstoque (boolean)

Depois, crie uma função mostrarProduto que recebe um objeto desse tipo e mostra suas informações no console.

💡 Dica:
Use um type e depois crie um objeto seguindo esse tipo.
A função deve aceitar um único parâmetro, que é o objeto. */

type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
}

function mostrarProduto (produto: Produto) {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço: ${produto.preco}`);
    console.log(`Em estoque: ${produto.emEstoque}`);
}

mostrarProduto({nome: "Camiseta", preco: 69.99, emEstoque: false});


/* 🔹 Exercício 2 — Tipo com propriedades opcionais

Crie um tipo Carro com:
marca (string)
ano (number)
cor? (string — opcional)

Crie uma função descricaoCarro que retorna um texto descrevendo o carro.

💡 Dica:
Propriedade opcional usa o símbolo ?
Dentro da função, antes de usar cor, verifique se ela existe. */

type Carro = {
    marca: string;
    ano: number;
    cor?: string;
}

function descricaoCarro(descricao: Carro) {
    console.log(`A marca do carro é: ${descricao.marca}`);
    console.log(`O ano: ${descricao.marca}`);
    console.log(`Cor: ${descricao.cor}`);
}

descricaoCarro({marca: "Hilux", ano: 2019});
descricaoCarro({marca: "Palio", ano: 2014, cor: "Vermelho"});

//Versão corrigida
function descricaoCarro2(descricao: Carro) {
    console.log(`A marca do carro é: ${descricao.marca}`);
    console.log(`O ano: ${descricao.ano}`);

    if (descricao.cor) {
        console.log(`Cor: ${descricao.cor}`);
    } else {
        console.log("Cor não informada");
    }
}

descricaoCarro2({ marca: "Hilux", ano: 2019 });
descricaoCarro2({ marca: "Palio", ano: 2014, cor: "Vermelho" });


/* 🔹 Exercício 3 — Tipos dentro de tipos

Crie dois tipos:

Endereco
rua (string)
numero (number)

Pessoa
nome (string)
endereco (Endereco)

Crie uma função mostrarPessoa que recebe uma Pessoa e mostra o nome e a rua onde ela mora.

💡 Dica:
Você vai usar um tipo dentro de outro, assim:

type Pessoa = {
    nome: string;
    endereco: Endereco;
}
 */

type Endereco = {
    rua: string;
    numero: number
}

type Pessoa = {
    nome: string;
    endereco: Endereco;
}

function mostrarPessoa(pessoa: Pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`O Endereço é: rua: ${pessoa.endereco.rua} e o numero é: ${pessoa.endereco.numero}`);
}

mostrarPessoa({nome: "Felipe", endereco: {rua: "Tal, Tal", numero: 231}});

//Forma mais organizada
function mostrarPessoa2(pessoa: Pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Endereço: ${pessoa.endereco.rua}, nº ${pessoa.endereco.numero}`);
}

mostrarPessoa2({nome: "Felipe", endereco: {rua: "Tal, Tal", numero: 231}});