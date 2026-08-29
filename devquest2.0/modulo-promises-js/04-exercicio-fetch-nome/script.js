/*
📝 Instruções do Exercício
Crie uma função assíncrona que faça uma requisição à API pública https://jsonplaceholder.typicode.com/users usando fetch com async/await. Depois, exiba no console os nomes e e-mails dos usuários retornados pela API. 
*/

const baseURL = "https://jsonplaceholder.typicode.com/users";
// O que faz: Define a URL base da API pública que será usada para buscar os dados dos usuários.

// funcao assincrona
const loadMultipleInfos = async () => {
  try {
    // fazendo requisicao HTTP a URL com o fetch
    //
    const response = await fetch(baseURL);
    /* O que faz: Faz uma requisição HTTP à URL definida em baseURL usando o método fetch. O await faz com que o código espere a resposta antes de continuar.
Por que é útil: Permite buscar os dados da API de forma assíncrona. */
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statuss}`);
    }

    //convertendo para JSON
    const users = await response.json();

    // exibindo os nomes e emails dos usuarios
    users.forEach((user) => {
      console.log(`Nome: ${user.name}, Email: ${user.email}`);
      console.log(typeof users);
    });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
};

// chamando a funcao
loadMultipleInfos();
