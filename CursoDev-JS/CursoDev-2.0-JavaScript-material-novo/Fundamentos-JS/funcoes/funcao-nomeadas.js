//Função sem paranmetro
function saudacao() {
    console.log("Olá, Ricardo!");
}

saudacao()

//Função com paranmetro
function saudacao2(nome, idade) {
    return `Olá, ${nome}! Você tem ${idade} anos.`;
    
}

const saudacaoRicardo = saudacao2("Ricardo", 37);
console.log(saudacaoRicardo);

//audacao2("Eduardo", 17);