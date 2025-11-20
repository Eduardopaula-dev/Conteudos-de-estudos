const orderPizza = async (hasIngredients) => {
    console.log("Pedido da pizza enviado para a cozinha...");

    if (!hasIngredients) {
        throw new Error("Não temos ingredientes suficientes...")
    }

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            //Simula uma chance de 40% de dar erro
            const hasErrors = Math.random() < 0.4;

            if (hasErrors) {
                reject("Erro ao preparar a pizza!")
            } else {
                resolve("Pizza pronta!")
            }
        }, 5000);
    });

    return "Pizza pronta"
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
    try {
        const pizzaMessage = await orderPizza();
        console.log(pizzaMessage);

        const pizzaDeliverPizza = await deliverPizza();
        console.log(pizzaDeliverPizza);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    } finally {
        console.log("Obrigado por pedir conosco. Volte sempre!");
    }
};

markerOrder();