const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.find ((numero) => {
    return numero > 3;
});

console.log(resultado); 


//Reduce 

const resultadoReduce = numeros.reduce ((acumulador, item) => {
    return acumulador + item;
}, 0)

console.log(resultadoReduce);