//Crie uma função assíncrona que faça uma requisição à API https://jsonplaceholder.typicode.com/posts usando fetch com async/await. Depois, exiba no console o título e o corpo dos primeiros 5 posts retornados.

const baseURL = "https://jsonplaceholder.typicode.com/posts"

const infoPosts = async () => {
    const response = await fetch(baseURL);
    const  posts = await response.json();

    posts.slice(0, 5).forEach((post) => {
        console.log(`Título: ${post.title} \nCorpo: ${post.body}\n`);
    });
}

infoPosts();