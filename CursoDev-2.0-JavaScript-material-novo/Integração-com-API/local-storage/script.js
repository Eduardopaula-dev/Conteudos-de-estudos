localStorage.setItem("name", "Eduardo");
localStorage.setItem("age", "27");

const usuario = {
    name: "Eduardo",
    age: 27
};

localStorage.setItem("usuario", JSON.stringify(usuario))

const produtos = [
    { id: 1, nome: 'Produto 1', preco: 90 },
    { id: 2, nome: 'Produto 2', preco: 60 },
    { id: 3, nome: 'Produto 3', preco: 80 },
    { id: 4, nome: 'Produto 4', preco: 120 },
    { id: 5, nome: 'Produto 5', preco: 150 },
]

localStorage.setItem("produtos", JSON.stringify(produtos));

const userName = localStorage.getItem("name");
console.log(userName);

const userJson = localStorage.getItem("usuario");
console.log(userJson);
console.log(typeof userJson);

const userObject = JSON.parse(userJson);
console.log(userObject);
console.log(typeof userObject);


const productsJson = localStorage.getItem("produtos");
const productsArray = JSON.parse(productsJson);
console.log(productsArray);


localStorage.removeItem("name")
localStorage.removeItem("age")