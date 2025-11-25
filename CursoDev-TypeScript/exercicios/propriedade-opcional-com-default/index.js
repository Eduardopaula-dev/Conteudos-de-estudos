/* # Exercício - Propriedade Opcional com Default em TypeScript

Neste exercício, você vai praticar o uso de **interfaces** e **propriedades opcionais** em **TypeScript**, além de definir valores **default** para parâmetros opcionais. O desafio consiste em criar uma função que receba um objeto `user` e exiba suas propriedades no console, considerando que apenas a propriedade `genero` é opcional, assumindo `"masculino"` como padrão quando não fornecida.

`AVISO`: tente fazer sozinho primeiro, caso sinta necessidade pode consultar a resolução do exercício.

### **Objetivos do exercício**

- Criar uma **interface** `User` com as propriedades:
    - `nome: string`
    - `idade: number`
    - `genero?: string` (opcional)
- Criar uma função que receba um objeto `user` com essa interface.
- Definir `"masculino"` como valor padrão para `genero`, caso não seja informado.
- Exibir os valores no console. */
/* function user(user: User) {
    console.log(`Nome: ${user.nome}`);
    console.log(`Idade: ${user.idade}`);
    if (user.genero === undefined) {
        console.log(`Gênero não informado`);
    } else {
        `Gênero: ${user.genero}`
    }
}; */
//Correção do codigo
function printUser(_a) {
    var nome = _a.nome, idade = _a.idade, _b = _a.genero, genero = _b === void 0 ? "masculino" : _b;
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Genero:", genero);
}
printUser({ nome: "Lucas", idade: 25, genero: "feminino" });
printUser({ nome: "João", idade: 30 });
