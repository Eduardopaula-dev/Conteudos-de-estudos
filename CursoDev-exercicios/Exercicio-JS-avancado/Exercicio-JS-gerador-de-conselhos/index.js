const botao = document.getElementById("btn");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("texto");

// ----- Codigo feito por mim -----
/* async function pegarMensagemAleatoria() {
    try {
        const pegandoMensagemAleatoria = await fetch("https://api.adviceslip.com/advice");
        const resposta = await pegandoMensagemAleatoria.json();
    } catch (err) {
        console.error("Erro ao pegar a mensagem")
    }
} */

// ----- Codigo corrigido pelo gpt ------
/* async function pegarMensagemAleatoria() {
    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar a mensagem da Api");
        }
    } catch (erro) {
        console.error("Erro ao obter a mensagem", erro);
    }
} */

// ------ Código finalizado -----
async function pegarMensagemAleatoria() {
    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");
        const dados = await resposta.json();
        titulo.innerText = `Advice #${dados.slip.id}`;
        descricao.innerText = dados.slip.advice;

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar a mensagem da Api");
        }
    } catch (erro) {
        console.error("Erro ao obter a mensagem", erro);
    }
}

botao.addEventListener("click", pegarMensagemAleatoria);

pegarMensagemAleatoria();