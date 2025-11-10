/*
    Pendente
    Realizada - resolve
    Recusada - reject
    Estabelecida
*/

/* return new Promise((resolve, reject) => {

}); */

let ferverAgua = function(){
    return new Promise((resolve, reject) => {
        if(chaleiraEstanoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver água')
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    });
}

let chaleiraEstanoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstanoFogao, fogaoEstaLigado)
console.log('fazendo o café')