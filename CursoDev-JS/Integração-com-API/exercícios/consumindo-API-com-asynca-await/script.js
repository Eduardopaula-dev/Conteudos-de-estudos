//Crie uma função assíncrona que faça uma requisição à API pública https://jsonplaceholder.typicode.com/users usando fetch com async/await. Depois, exiba no console os nomes e e-mails dos usuários retornados pela API.

const baseURL = "https://jsonplaceholder.typicode.com/users"

const infoUsers = async () => {
    const response = await fetch(baseURL);
    const users = await response.json();

    users.forEach((user) => {
        console.log(`Nome: ${user.name} | Email: ${user.email}`);
    });
}

infoUsers();