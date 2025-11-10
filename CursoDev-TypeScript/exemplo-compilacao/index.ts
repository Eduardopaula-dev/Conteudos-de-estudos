function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
 }
 
 const userName = "Beto"
 const isLogged = true
 
 sendMessage(userName, isLogged)
 