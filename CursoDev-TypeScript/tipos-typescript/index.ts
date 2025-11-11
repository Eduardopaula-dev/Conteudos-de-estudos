//No JS
const nameJS = "Eduardo";
const ageJS = 30;
const booleanJS = true;

//No TS
const nameTS: string = "Eduardo"
const ageTS: number = 30;
const booleanTS: boolean = false;

//Uma função com tipos em TypeScript
function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
 }
 
 const userName = "Beto"
 const isLogged = true
 
 sendMessage(userName, isLogged)


//Array no JS
const arrayJS = [1, 2, 3, 4, 5];

//Array no TS
const arrayTS: number[] = [1, 2, 3, 4, 5];
//ou
const arrayTS2: string[] = ["Eduardo", "Beto", "Ana"];

//Any, tipo que aceita qualquer valor
let valorAny: any = 5;
valorAny = "Eduardo";
valorAny = true;

//Objetos em TypeScript
function imprimirCoordenadas(coord: {x: number, y: number}) {
    console.log("A coordenada x vale " + coord.x);
    console.log("A coordenada x vale " + coord.y);
} 

imprimirCoordenadas({x: 29, y: 55})

//ou

let objeto: {x: number, y: number} = {x: 10, y: 20};
console.log(objeto);