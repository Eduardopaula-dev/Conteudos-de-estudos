let ferverAgua = function () {
    return new Promise((resolve, reject) => {
        if (chaleiraEstanoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver água')
            resolve()
        } else {
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    });
}

let chaleiraEstanoFogao = true
let fogaoEstaLigado = true

let passarCafe = () => console.log('passando café')

ferverAgua(chaleiraEstanoFogao, fogaoEstaLigado).then(passarCafe)
console.log('fazendo o café')