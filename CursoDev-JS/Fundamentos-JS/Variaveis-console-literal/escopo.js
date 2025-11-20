// Global - usadas em qualque lugar do meu código
let idade = 45

//local - usadas somente aonde foram criadas
function mostrarIdade() {
    let nome = "João"; // Variavel local
    console.log(nome);
    console.log(idade);

    //Bloco - Usadas somente dentro da {}
    if(idade > 18) {
        let podeDirigir = true

        console.log("Maior de idade");
        console.log(podeDirigir);
        
        
    }else {
        console.log(("Menor de idade"));
        
    }
    
}

mostrarIdade();