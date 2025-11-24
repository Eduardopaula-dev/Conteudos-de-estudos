/* # Exercício - Usando Interfaces em TypeScript

Neste exercício, você vai praticar a **definição de interfaces** em **TypeScript** para tipar objetos, garantindo que eles sigam uma estrutura clara e segura. O desafio consiste em criar uma interface para representar um usuário e, em seguida, instanciar um objeto a partir dela.

`AVISO`: tente fazer sozinho primeiro, caso sinta necessidade pode consultar a resolução do exercício.

### **Objetivos do exercício**

- Criar uma interface para tipar objetos em TypeScript.
- Definir corretamente as propriedades e seus respectivos tipos.
- Criar um objeto baseado na interface.
- Exibir as informações no console.

### **Sugestões de implementação**

- Use a palavra-chave `interface` para declarar a tipagem.
- Defina as propriedades `id` (number), `name` (string) e `email` (string).
- Crie um objeto seguindo a estrutura da interface `User`.
- Utilize `console.log` para exibir cada propriedade no console.

**Objetivo final:** reforçar o entendimento sobre como usar **interfaces em TypeScript** para tipar objetos, deixando o código mais organizado e confiável. */
var user = {
    id: 1,
    name: "João",
    email: "afaruhhdyes@gmail.com"
};
console.log("ID: ".concat(user.id));
console.log("Name: ".concat(user.name));
console.log("Email: ".concat(user.email));
