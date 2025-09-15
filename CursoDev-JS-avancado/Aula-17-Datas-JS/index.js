const dataAtual = new Date();

//---------------------------------------------------

/* const umDiaDepois = new Date(dataAtual);

umDiaDepois.setDate(dataAtual.getDate() + 1); 

console.log(umDiaDepois)*/

//---------------------------------------------------

/* const umMesAtras = new Date(dataAtual);

umMesAtras.setMonth(umMesAtras.getMonth() - 1); 

console.log(umMesAtras)*/

//---------------------------------------------------

/* const opcoes = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
const dataFormada = dataAtual.toLocalDateString('pt-br', opcoes);

console.log(dataFormada); */

//---------------------------------------------------

/* const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const formatador = new Intl.DateTimeFormat('pt-br', opcoes);

const dataFormada = formatador.format(dataAtual);

console.log(dataFormada); */