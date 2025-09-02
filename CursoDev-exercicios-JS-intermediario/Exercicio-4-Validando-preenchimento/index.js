const validandoInformacoes = document.querySelectorAll('.validando-informacoes');
// Adicionando um evento de input para validar o preenchimento
validandoInformacoes.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== ""){
            input.classList.add('verde');
        } else {
            input.classList.remove('verde');
        }
    })
})

console.log(validandoInformacoes);