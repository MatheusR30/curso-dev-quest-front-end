/*Crie uma função assíncrona que receba manualmente um ID de usuário (1 a 10) como parâmetro e faça uma requisição à API https://jsonplaceholder.typicode.com/users/{id} usando fetch com async/await. Depois, exiba no console o nome, e-mail e endereço (rua e cidade) do usuário retornado.
 */

// define a URL base da API publica que sera usada para buscar os dados dos usuarios
const baseURL = "https://jsonplaceholder.typicode.com";

// funcao assíncrona
const loadId = async (id) => {
  try {
    // requisicao (fetch/buscar) no baseURL com o detalhe "users/id" em cada busca do response
    const response = await fetch(`${baseURL}/users/${id}`);

    // converter JSON/String em Objeto javaScript
    const user = await response.json();

    console.log(`Nome: ${user.name}`);
    console.log(`E-mail: ${user.email}`);
    console.log(`Endereço: ${user.address.street},${user.address.city}`);
  } catch (error) {
    console.error("Erro ao buscar o ID", error.message);
  }
};

loadId(5);
