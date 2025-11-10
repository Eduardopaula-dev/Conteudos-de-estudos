function sendMessage(userName, isLogged) {
    console.log("Ol\u00E1 ".concat(userName, ". Voc\u00EA ").concat(!isLogged ? " não" : "", " pode logar."));
}
var userName = "Beto";
var isLogged = true;
sendMessage(userName, isLogged);
