/* let jogo1 = {
    nome: 'Final Fantasy'
} */

/* let jogo2 = {
    nome: 'Fallout'
} */

/* let videoGame = {
    nome: ' Xbox',
    valor: 3000,
    jogos: [
        { nome: 'Final Fantasy'},
        { nome: 'Fallout'}
    ]
}

let jogo3 = {
    nome: 'Fifa'
}

videoGame.jogos.push(jogo3)

console.log(videoGame) */

let cliente = {
    nome: 'Eduardo',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogo: [
            {nome: 'Fifa'}
        ]
    }
}

//Como acessar no log dentro dos objetos
console.log(cliente.ultimoPedido.jogo[0].nome)