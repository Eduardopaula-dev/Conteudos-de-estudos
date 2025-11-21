//Aqui vai ser obrigatorio passas os 3 parametros
type Custumer = {
    firstName: string;
    lastName: string;
    age: number;
};

const newCustumer: Custumer = {
    firstName: "João",
    lastName: "Nascimento",
    age: 29
};

console.log(newCustumer);

//Não vai ser obrigatorio passar os 3 parametros
type Custumer2 = {
    firstName: string;
    lastName?: string;
    age: number;
};

const newCustumer2: Custumer2 = {
    firstName: "João",
    age: 29
};

console.log(newCustumer2);

//Tbm o parametro opcional é passado para função

function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é: ${firstName}`);
};

printName("João");



