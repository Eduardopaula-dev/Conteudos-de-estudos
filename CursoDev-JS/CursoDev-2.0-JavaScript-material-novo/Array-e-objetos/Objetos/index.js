//um objeto é uma estrutura de dados que armazena valores em pares chave-valor
const user = {
    name: 'Ricardo',
    age: 30,
    apresentar: function() {
        console.log(`Meu nome é ${this.name} e tenho ${this.age} anos.`);
    }
};


console.log(user.name);
console.log(user.age);

//adicionando uma nova propriedade ao objeto
user.job = 'Programador';
console.log(user.job);

user.apresentar();

const userEduardo = {
    name: 'Eduardo',
    age: 29,
    apresentar: function() {
        console.log(`Meu nome é ${this.name} e tenho ${this.age} anos.`);
    }
};

userEduardo.apresentar();

//Arrays de objetos

const products = [
    {id:1, name: 'Camisa', price: 20.00},
    {id:2, name: 'Calça', price: 40.00},
    {id:3, name: 'Tênis', price: 100.00}
]

console.log(products[0].name); //Acessando o nome do primeiro produto

products.forEach((product) => {
    console.log(`${product.name} - R$${product.price}`);
});
