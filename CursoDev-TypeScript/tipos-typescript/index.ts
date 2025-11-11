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
 