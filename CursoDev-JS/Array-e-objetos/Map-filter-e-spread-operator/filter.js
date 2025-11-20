//filter - vai filtrar os elementos de um array com base em uma condição
const products = [
    {id: 1, name: 'Camiseta', price: 20},
    {id: 2, name: 'Calça', price: 50},
    {id: 3, name: 'Meia', price: 500},
    {id: 4, name: 'Tênis', price: 150}
];


const priceGreaterThanOneHundred = products.filter(product => product.price > 100);

console.log(priceGreaterThanOneHundred);
