const orderPizza = () => {
    return new Promise((resolve) => {
        console.log("Pedido da pizza enviado para a cozinha...");

        setTimeout(() => {
            resolve("Pizza pronta!")
        }, 5000);
    });
};

//Simular uma api que entrega pizza
const deliverPizza = () => {
    console.log("Pedido a caminho...");
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("A pizza está entregue!");

        }, 8000);
    });
};

const markerOrder = async () => {
    const pizzaMessage = await orderPizza();
    console.log(pizzaMessage);

    const pizzaDeliverPizza = await deliverPizza();
    console.log(pizzaDeliverPizza);
}

markerOrder();