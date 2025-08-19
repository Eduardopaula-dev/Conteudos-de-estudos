/* function nomeDaFuncao(){
    <bloco de execução>
}

    nomeDaFuncao()


function nomeDaFuncao(parametro1, parametro2){
    <bloco de execução>
}

    function nomeDaFuncao(parametro1, parametro2) */




function incentivarQuester(){
    alert('Muito bem, você chegou ao JS, continue assim!')
}

incentivarQuester()





function soma(numero1, numero2){
    console.log(numero1 + numero2)

}

soma(10, 20) 




function soma(numero1, numero2){
    return numero1 + numero2 

}

let resultadoDaSoma = soma(10, 20)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 30)
console.log(resultadoDaSoma) 




function incentivarQuester(nomeQuester = 'Quester'){
    alert('Muito bem '+ nomeQuester +', você chegou ao JS, continue assim!')
}

incentivarQuester('Roberto')