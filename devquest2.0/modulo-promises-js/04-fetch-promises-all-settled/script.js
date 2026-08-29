const baseURL = "https://ghibliapi.vercel.app";

const loadSingleMovie = async (id) => {
  try {
    // Faz a requisição (fetch) para ttps://ghibliapi.vercel.app/films/id
    // o id é recebido por parâmetro na função
    const response = await fetch(`${baseURL}/films/${id}`);

    //  Faz a conversao para objeto
    const movie = await response.json();

    console.log(movie.title);
  } catch (error) {
    console.log("Erro ao carregar filme: ", error);
  }
};

// loadSingleMovie();

const loadMultipleMoviesAll = async (moviesIds) => {
  try {
    // Faz a requisição (fetch) para ttps://ghibliapi.vercel.app/films/id
    // o id é recebido por parâmetro na função
    const promises = moviesIds.map(async (id) => {
      const response = await fetch(`${baseURL}/films/${id}`);

      if (!response.ok) {
        throw new Error(`Erro ao carregar filme com id: ${id}`);
      }

      return response.json();
    });

    // Quando todos os dados forem obrigadtórios para continuar a execução do código
    const movies = await Promise.all(promises);
    console.log(movies);
  } catch (error) {
    console.log("Erro ao carregar filme: ", error);
  }
};

const moviesIds = [
  "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky
  "id Invalido", // Grave of the Fireflies
  "58611129-2dbc-4a81-a72f-77ddfc1b1b49", // My Neighbor Totoro
];

loadMultipleMoviesAll(moviesIds);

const loadMultipleMoviesAllSettled = async (moviesIds) => {
  try {
    // Faz a requisição para ttps://ghibliapi.vercel.app/films/id
    // o id é recebido por parâmetro na função
    const promises = moviesIds.map(async (id) => {
      const response = await fetch(`${baseURL}/films/${id}`);

      if (!response.ok) {
        throw new Error(`Erro ao carregar filme com id: ${id}`);
      }

      return response.json();
    });

    // Usar quando quiser aproveitar o que deu certo e lidar individualmente com os erros
    const movies = await Promise.allSettled(promises);

    console.log(movies);

    console.log("Relatório final:");

    movies.forEach((movies, index) => {
      if (movies.status === "fulfilled") {
        console.log("OK:", movies.value.title);
      } else {
        // Com o reason conseguimos pegar a mensagem de erro
        console.log(`ERRO no filme ${moviesIds[index]}`, movies.reason.message);
      }
    });
  } catch (error) {
    console.log("Erro ao carregar filme: ", error);
  }
};

loadMultipleMoviesAllSettled(moviesIds);
