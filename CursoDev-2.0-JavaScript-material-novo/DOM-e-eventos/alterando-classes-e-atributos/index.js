const quadrado = document.querySelector('.quadrado');

quadrado.classList.remove("azul")

quadrado.classList.add("preto")

//quadrado.classList.toggle("preto")

const hasBlack = quadrado.classList.contains("preto");

if (hasBlack) {
    console.log("Tem a classe preto");
} else {
    console.log("Não tem a classe preto");
}


//Mexendo nos atribitos no HTML
const inputCor = document.getElementById('cor');

// setAttribute -> adiciona ou altera um atributo

inputCor.setAttribute("placeholder", "Digite uma cor");

// getAttribute -> pega o valor de um atributo
const valorPlaceholder = inputCor.getAttribute("placeholder");

console.log(valorPlaceholder);

// removeAttribute -> remove um atributo

inputCor.removeAttribute("placeholder");