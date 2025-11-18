/* Neste exercício, você vai praticar como **consumir dados de uma API externa** utilizando **fetch** com **async/await**, enquanto garante a **tipagem correta** do retorno em **TypeScript**. O desafio consiste em definir um tipo que represente os produtos da API e exibir no console algumas informações relevantes.

`AVISO`: tente fazer sozinho primeiro, caso sinta necessidade pode consultar a resolução do exercício.

### **Objetivos do exercício**

- Criar um `type` que represente os produtos retornados pela API FakeStore.
- Definir todas as propriedades necessárias, incluindo o objeto interno `rating`.
- Implementar uma função assíncrona para buscar os dados da API.
- Tipar o retorno da função como `Promise<Produto[]>`.
- Exibir no console o título e o preço de cada produto.
- Tratar erros em caso de falha na requisição.

### **Sugestões de implementação**

- Use `type Produto = { ... }` para definir a estrutura dos dados.
- Utilize `fetch` em conjunto com `async/await` para buscar os produtos.
- Após o `await response.json()`, atribua o resultado a uma variável tipada como `Produto[]`.
- Use `forEach` para percorrer o array e imprimir as informações desejadas no console.
- Adicione um `catch` para capturar e exibir possíveis erros.

**Objetivo final:** reforçar o entendimento sobre **consumo de APIs** com **TypeScript**, aplicando tipagem estática para garantir maior segurança e clareza no código. */

type Products = [
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number
        count: number
    }
]

async function getProducts(): Promise<Products[]> {
    const response = await fetch("https://fakestoreapi.com/products")
    return await response.json()
}

async function renderProducts() {
    try {
        const product = await getProducts()

        product.forEach(product => {
            console.log(`Titulo; ${product.title}`);
            console.log(`Preço: ${product.price}`);
            console.log('-------------------------');
        })
    } catch (error) {
        console.error('Erro ao carregar produtos', error)
    }
}

renderProducts()