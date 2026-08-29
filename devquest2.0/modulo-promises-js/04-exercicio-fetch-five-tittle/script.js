/*Crie uma função assíncrona que faça uma requisição à API https://jsonplaceholder.typicode.com/posts usando fetch com async/await. Depois, exiba no console o título e o corpo dos primeiros 5 posts retornados.
 */

// URL base
const baseURL = "https://jsonplaceholder.typicode.com/posts";

// funcao assíncrona
const loadTittle = async () => {
  try {
    // requisicao à API
    const response = await fetch(baseURL);

    // converter o response para JSON
    const data = await response.json();
    console.log(typeof data);
    // Laço for com limite baseado no id dos objetos

    for (let i = 0; i < data.length && i < 5; i++) {
      console.log(`Título: ${data[i].title}`);
      console.log(`Corpo: ${data[i].body}`);
      console.log(`---`);
    }
  } catch (error) {
    console.error("Erro ao buscar título", error.message);
  }
};

// chamar funcao
loadTittle();
