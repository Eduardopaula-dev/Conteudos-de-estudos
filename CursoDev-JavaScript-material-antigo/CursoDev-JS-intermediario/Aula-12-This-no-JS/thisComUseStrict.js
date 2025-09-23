'use strict' // nao deixa o this passar para o escopo global

/* console.log(this)
console.log(window)
console.log(window === this) */

/* this.name = 'Ricardo'
function saudar(){
    console.log('this no contexto da função', this)
    console.log('Olá, ' + this.name)

    saudar()
} */


/* let usario = {
    nome: 'Eduardo',
    saudar: function(){
        console.log('this no contexto do metodo')

        console.log('this.nome no contexto do metodo', this.nome)
    }
}

usario.saudar() */

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento) {
        console.log('this no contexto do objeto comida', this)
        this.temperatura = temperaturaDeCozimento;
    }
}

/* comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento) {
    comidaParaCozinhar.temperatura =
    temperaturaDeCozimento;
} */

/* comida.cozinhar = function(temperaturaDeCozimento) {
    console.log('this no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento;
}
 */
console.log(comida)

comida.cozinhar(100)

console.log(comida)