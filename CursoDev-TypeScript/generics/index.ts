function makeArray(num: number) : number[] {
    return [num]
}

const numbers = makeArray(12);
console.log(numbers);

const names = makeArray("Ricardo")

//Deixando como generics

function makeArray2<T>(item: T) : T[] {
    return [item]
}

const numbers2 = makeArray2(12);
console.log(numbers2);

const names2 = makeArray2("Ricardo");
console.log(names2);


//Exercícios

/* 🚀 Exercício 1 — Função genérica "retorna o valor"

Crie uma função genérica chamada identidade que:
Receba um valor de qualquer tipo
Retorne esse valor
Use um tipo genérico <T>

Exemplo esperado de uso:
identidade(10);
identidade("Olá");
identidade(true); */


function identidade<T>(item: T) : T {
    return item
}

identidade(10);
identidade("Olá");
identidade(true);


/* 🚀 Exercício 2 — Criar uma lista genérica

Crie uma interface genérica chamada Lista<T> com:
Uma propriedade itens que é um array de T
Um método adicionar(item: T) que adiciona um item à lista

Depois crie uma lista para:
números
strings

(duas instâncias diferentes usando o mesmo tipo genérico) */

interface Lista<T> {
    itens: T[];
}

const minhaListaNumbers: Lista<number> = {
    itens: [],
    adicionar(item: number) {
        this.itens.push(item);
    }
};


const minhaListaStrings: Lista<string> = {
    itens: [],
    adicionar(item: string) {
        this.itens.push(item);
    }
};

minhaListaNumbers.adicionar(10);
minhaListaNumbers.adicionar(20);

minhaListaStrings.adicionar("Olá");
minhaListaStrings.adicionar("Mundo");

console.log(minhaListaNumbers);
console.log(minhaListaStrings);


/* 🚀 Exercício 3 — Função para pegar o primeiro elemento

Crie uma função genérica chamada primeiroElemento que:
Recebe um array de qualquer tipo
Retorna o primeiro elemento do array
Mantém o tipo do elemento corretamente

Exemplos esperados:
primeiroElemento([1, 2, 3]);        // retorna number
primeiroElemento(["a", "b", "c"]);  // retorna string */


function primeiroElemento<T>(item: T[]) : T {
    return item[0]
}

primeiroElemento([1, 2, 3])
primeiroElemento(["a", "b", "c"])