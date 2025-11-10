const input = document.getElementById('nome');
const button = document.getElementById('btn');
const formBusca = document.getElementById('form-busca');


// Evento de click, onde o usuario clica no botão e o console.log exibe a mensagem "clicou"
button.addEventListener("click", () => {
    console.log("clicou");
    
})

// Evento de input, onde o usuario digita no input e o console.log exibe a mensagem "digitou" e o valor digitado
input.addEventListener("input", () => {
    console.log("digitou");
    
    const value = input.value;
    console.log(value);
})


// Evento de submit, onde o usuario envia o formulário e o console.log exibe o valor do input
formBusca.addEventListener("submit", (event) => {
    event.preventDefault();
    
    console.log(input.value);
    
})