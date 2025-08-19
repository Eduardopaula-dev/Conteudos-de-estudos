/* let nomeFilme = 'Superman'

if(nomeFilme === 'Vingadores'){
    console.log('É o filme dos Vingadores')
}else if(nomeFilme === 'Batman'){
    console.log('É o filme do Batman')
}else if(nomeFilme === 'Capitão América'){
    console.log('É o filme do Capitão América')
}else{
    console.log('É outro filme')
} */

//JEITO ENCURTADO//

/* let nomeFilme = 'Vingadores'

false ? console.log('condição verdadeira') : console.log('condição falsa')

nomeFilme === 'Vingadores' ? console.log('É o filme dos Vingadores') : console.log('É outro filme') */



// SCWITCH//

let avaliacao = 4

switch(avaliacao){
    case 1:
    case 2:
        console.log('Filme ruim')
        break
    case 3:
    case 4:
        console.log('Filme mediano')
        break
    case 5:
    case 6:
        console.log('Filme bom')
        break
    case 7:
    case 8:
        console.log('Filme excelente')
        break
    default:
        console.log('nota inválida')
        break
}