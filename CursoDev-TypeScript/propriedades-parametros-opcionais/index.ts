//Aqui vai ser obrigatorio passas os 3 parametros
type Custumer = {
    firstName: string;
    lastName: string;
    age: number;
};

const newCustumer: Custumer = {
    firstName: "João",
    lastName: "Nascimento",
    age: 29
};

console.log(newCustumer);

//Não vai ser obrigatorio passar os 3 parametros
type Custumer2 = {
    firstName: string;
    lastName?: string;
    age: number;
};

const newCustumer2: Custumer2 = {
    firstName: "João",
    age: 29
};

console.log(newCustumer2);

//Tbm o parametro opcional é passado para função

function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é: ${firstName}`);
};

printName("João");



// < ----------------- Exercícios -------------------- >

/* 📝 Exercício 1 — Propriedade opcional em objeto

Crie um type chamado Livro com:
título (string)
autor (string)
anoPublicacao (number)
edição? (number — opcional)

Depois, crie uma função que receba um objeto Livro e escreva no console as informações.
Se a edição existir, mostre também. Se não existir, ignore. */

type Livro = {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    edicao?: number;
}

function printLivro(livro: Livro) {
    console.log(`Título do livro: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano Publicação: ${livro.anoPublicacao}`);

    //Caso precise verificar se é undefined ---> if (livro.edicao !== undefined)
    if(livro.edicao){
        console.log(`Edição: ${livro.edicao}`);
    } else {
        console.log("Edição não informada");
    }

}

printLivro({titulo: "Harry Potter", autor: "J. K.", anoPublicacao: 2001});


//Versão encurtada/melhorada
function printLivro2(livro: Livro) {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano: ${livro.anoPublicacao}`);
    console.log(`Edição: ${livro.edicao ?? "Não informada"}`);
}

printLivro2({titulo: "Percy Jackson", autor: "Rick Riordan", anoPublicacao: 2005, edicao: 1});


/* 📝 Exercício 2 — Parâmetro opcional na função

Crie uma função chamada saudar que receba:
nome (string)
saudacao? (string — opcional)

Se a saudação existir → use ela.
Se não existir → use "Olá" como padrão.

Exemplos esperados (não faça o código agora, só para entender o que deve acontecer):
saudar("Ana") → "Olá, Ana"
saudar("João", "Bom dia") → "Bom dia, João" */

function saudar(nome: string , saudacao?: string) {
    if (saudacao !== undefined) {
        console.log(`${saudacao}, ${nome}`);
    } else {
        console.log(`Olá, ${nome}`);
    }
}

saudar("João");
saudar("Ana", "Bom dia, ");

/* 📝 Exercício 3 — Objeto com 2 propriedades opcionais

Crie um type Filme com:
nome (string)
diretor (string)
ano? (number — opcional)
genero? (string — opcional)

Depois crie uma função que receba um Filme e:
sempre mostre nome e diretor
mostre o ano apenas se existir
mostre o gênero apenas se existir */

type Filme = {
    nome: string;
    diretor: string;
    ano?: number;
    genero?: string;
};

function printFilme(infoFilme: Filme) {
    console.log(`Filme: ${infoFilme.nome}`);
    console.log(`Diretor: ${infoFilme.diretor}`);
    console.log(`Ano: ${infoFilme.ano ?? "Não informado"}`);
    console.log(`Genero: ${infoFilme.genero ?? "Não informado"}`);
};

printFilme({nome: "Transformers", diretor: "Michael Bay"});
printFilme({nome: "Piratas do Caribe", diretor: "Gore Verbinski", ano: 2003, genero: "Aventura"});