const frutas = ['Banana', 'Maça', 'Uva'];
const lista = document.getElementById('frutas')

frutas.forEach(fruta => {
    const item = document.createElement("li");

    //Insere o nome da fruta no conteúdo da li
    item.textContent = fruta

    lista.appendChild(item)
});

const products = [
    {
        id: 1,
        name: "Camiseta Dev em Dobro Preta",
        image: "./assets/camiseta-1.png",
        price: 3500,
        color: "Preto",
        size: "M",
    },
    {
        id: 2,
        name: "Camiseta Dev em Dobro Roxa",
        image: "./assets/camiseta-2.png",
        price: 2500,
        color: "Roxa",
        size: "G",
    },
    {
        id: 3,
        name: "Camiseta Dev em Dobro Preta - Costas",
        image: "./assets/camiseta-1-costas.png",
        price: 1500,
        color: "Preto",
        size: "G",
    },
    {
        id: 4,
        name: "Camiseta Dev em Dobro Roxa - Costas",
        image: "./assets/camiseta-2-costas.png",
        price: 6000,
        color: "Roxa",
        size: "M",
    },
    {
        id: 5,
        name: "Caneca Dev em Dobro",
        image: "./assets/caneca.png",
        price: 500,
        color: "Branca",
        size: 'M',
    },
]

//Renderizando arrays de objetos no HTML

const listaProdutos = document.getElementById('produtos')

const renderizarProdutos = () => {
    listaProdutos.innerHTML = products.map(product => {
        return `
            <li>
                <img src="${product.image}" alt="${product.name}"/>
                <p>${product.name}</p>
                <P>Cor: ${product.color}</p>
                <p>${product.price}</p>
                <button type="button">Comprar</button>
            </li>
        `
    }).join("")
};

renderizarProdutos()