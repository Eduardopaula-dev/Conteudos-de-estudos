interface ICustumer {
    name: string;
    age: number;
}

interface IAddress {
    stret: string
}

interface ICustumerProfile extends ICustumer, IAddress {
    id: string | number
}

const newProfile: ICustumerProfile = {
    id: 23,
    name: "Ricardo",
    age: 35,
    stret: "São Bernado"
}

type TCustumer = {
    name: string;
    age: number;
}

type TAddrres = {
    stret: string
}

type TCustomerProfile = TCustumer & TAddrres;

const newProfile2: TCustomerProfile = {
    name: "Ricardo", 
    age: 35,
    stret: "São Bernado"
}


//Exercícios 

/* ✅ Exercício 1 — Interface com extends

Crie uma interface base chamada Produto com:
nome (string)
preco (number)

Depois, crie uma interface Eletronico que extends Produto, adicionando:
voltagem (number)

Tarefa:
Crie um objeto usando a interface Eletronico. */

interface Produto {
    nome: string;
    preco: number;
}

interface Eletronico extends Produto {
    voltagem: number;
}

const meuEletronico: Eletronico = {
    nome: "Mouse",
    preco: 23.99,
    voltagem: 200
}

/* ✅ Exercício 2 — Usar type com interseção (&) para “estender” um tipo

Crie dois types:
Um type Pessoa contendo: nome (string) e idade (number)
Um type Funcionario que herda (&) tudo de Pessoa e adiciona: cargo (string)

Tarefa:
Crie uma constante usando o tipo Funcionario. */

type Pessoa = {
    nome: string;
    idade: number;
}

type Funcionario = Pessoa & {
    cargo: string
}

const perfilFuncionario: Funcionario = {
    nome: "João",
    idade: 29,
    cargo: "Senior"
}

/* ✅ Exercício 3 — Interface extendendo duas interfaces

Crie duas interfaces:
Endereco → rua e cidade
Contato → email e telefone

Depois crie uma interface Cliente que estende as duas interfaces.

Tarefa:
Crie uma constante que siga o tipo Cliente. */

interface Endereco {
    rua: string;
    cidade: string;
}

interface Contato {
    email: string;
    telefone: string;
}

interface Cliente extends Endereco, Contato {}

const cliente: Cliente = {
    rua: "Rua XYZ",
    cidade: "Cidade ABC",
    email: "paula@gmail.com",
    telefone: "618183133"
}