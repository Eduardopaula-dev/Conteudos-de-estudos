//Crie uma função assíncrona que receba manualmente um ID de usuário (1 a 10) como parâmetro e faça uma requisição à API https://jsonplaceholder.typicode.com/users/{id} usando fetch com async/await. Depois, exiba no console o nome, e-mail e endereço (rua e cidade) do usuário retornado.

const baseURL = "https://jsonplaceholder.typicode.com/users"

const infoUsers = async (id) => {
    const response = await fetch(`${baseURL}/${id}`);
    const user = await response.json();

    console.log(`Nome: ${user.name} | Email: ${user.email} | Cidade: ${user.address.city} | Rua: ${user.address.street}`);
}

infoUsers(3);