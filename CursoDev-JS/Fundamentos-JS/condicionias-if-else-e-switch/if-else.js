//Condicionais são controles de fluxo do nosso código

// If - se for isso, irá fazer

const filme = "Homem Aranha"

if(filme === "Harry Potter") {
    console.log("Caiu no if do Harry Potter");
    
}
if(filme === "Homem Aranha") {
    console.log("Caiu no if do Homem Aranha");
    
}

// Else -  caso não seja, fará isso

const filme2 = "Batman"

if(filme2 === "Homem Aranha") {
    console.log("Caiu no if do Homem Aranha");   
}else if(filme2 === "Batman") {
    console.log("Caiu no else do Batman");
}
//O codigo pode rolar inifinitamente so colocar novamente else if
// else if é usado para colocar o () para comporar algo, se não for fazer use o else

const idade = 17
if(idade >= 18) {
    console.log("Pode entrar na festa");
}else {
    console.log("Não pode entrar na festa");
}

const idade2 = 18
if(idade2 >= 18) {
    console.log("Pode entrar na festa");
}else {
    console.log("Não pode entrar na festa");
}

// Operador ternário
//condição ? valor verdadeiro : valor para falso

idade >= 18 
    ? console.log("Pode entrar na festa")
    : console.log("Não pode entrar na festa");

const podeEntrarNaFesta = idade2 >= 18
    ? "Pode entrar na festa"
    : "Não pode entrar na festa"

console.log(podeEntrarNaFesta);
