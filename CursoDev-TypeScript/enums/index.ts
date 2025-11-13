enum Colors {
    Red = 1,
    Blue,
    Green,
}

//Percorrendo o enum usando o for
for (const key in Colors) {
    console.log(key);
}

function showColor(color) {
    console.log(color);
}

showColor(Colors.Red);

enum UserResponse {
    No = 1,
    Yes = 2,
}

function respondeEmail(recipient: string, response: UserResponse): void {
    // ... salvar no banco se o usuário respondeu ou não
}

const salvar = respondeEmail("Beto", UserResponse.Yes)

enum TradeType {
    ACAO = 2533,
    TESOURO_DIRETO = 1920,
    TESOURO_SELIC = 2211,
}

const saveTrade = TradeType.TESOURO_DIRETO;
console.log(saveTrade);

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
}

const ok = StatusCodes.OK
console.log(ok);


enum Genero {
    M = "Masculino",
    F = "Feminino",
}

const dados = Genero.M
console.log(dados);
