var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Green"] = 3] = "Green";
})(Colors || (Colors = {}));
//Percorrendo o enum usando o for
for (var key in Colors) {
    console.log(key);
}
function showColor(color) {
    console.log(color);
}
showColor(Colors.Red);
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 1] = "No";
    UserResponse[UserResponse["Yes"] = 2] = "Yes";
})(UserResponse || (UserResponse = {}));
function respondeEmail(recipient, response) {
    // ... salvar no banco se o usuário respondeu ou não
}
var salvar = respondeEmail("Beto", UserResponse.Yes);
var TradeType;
(function (TradeType) {
    TradeType[TradeType["ACAO"] = 2533] = "ACAO";
    TradeType[TradeType["TESOURO_DIRETO"] = 1920] = "TESOURO_DIRETO";
    TradeType[TradeType["TESOURO_SELIC"] = 2211] = "TESOURO_SELIC";
})(TradeType || (TradeType = {}));
var saveTrade = TradeType.TESOURO_DIRETO;
console.log(saveTrade);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var ok = StatusCodes.OK;
console.log(ok);
var Genero;
(function (Genero) {
    Genero["M"] = "Masculino";
    Genero["F"] = "Feminino";
})(Genero || (Genero = {}));
var dados = Genero.M;
console.log(dados);
