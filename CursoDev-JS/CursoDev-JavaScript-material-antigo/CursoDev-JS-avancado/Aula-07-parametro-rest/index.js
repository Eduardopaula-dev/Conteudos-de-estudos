function incentivarQuester(mensagem, ...nomesQuester){
    nomesQuester.map(nomeQuester => console.log(`${mensagem} ${nomesQuester}`))
}

incentivarQuester("Parabéns por ter chegado ao módulo de JS avançado," , 'João, ' , 'Ricardo e ' , 'Pedro' )