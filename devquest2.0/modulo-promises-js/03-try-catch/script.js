const orderPizza = async (hasIngredientes) => {
  // ANtes do ASYNC, usavamos return com a promise
  //   return new Promise((resolve, reject) => {
  console.log("pedido da pizza enviado para a cozinha...");

  if (!hasIngredientes) {
    // Throw seria de LANÇAR, lançar um erro para quem chamou essa função
    throw new Error("Não temos ingredientes suficientes...");
    // reject(new Error("Não temos ingredientes suficientes no momento"));
    // return;
  }

  await new Promise((resolve, reject) =>
    setTimeout(() => {
      //  Simula uma chance de 40% de dar erro
      const hasErrors = Math.random() < 0.4;

      if (hasErrors) {
        reject("Erro ao preparar a pizza.");
      } else {
        resolve("Pizza pronta");
      }
      // 1000 milisegundos = 1 segundo
    }, 1000),
  );

  return "Pizza pronta";
};

// simular uma api que entrega a pizza
const deliverPizza = () => {
  return new Promise((resolve) => {
    console.log("A pizza esta a caminho...");

    setTimeout(() => {
      resolve("Pizza estregue!");
    }, 1000);
  });
};

const makeOrder = async () => {
  // tentar, ele vai tentar executar o código e se nao conseguir ele entra no CATCH
  try {
    const pizzaMessage = await orderPizza(true);
    console.log(pizzaMessage);

    const deliverPizzaMessage = await deliverPizza();
    console.log(deliverPizzaMessage);
    // Deu erro, mostramos o erro, e colocamos mensagem expliando qual foi.
  } catch (error) {
    console.log("Occorreu um erro: ", error);
    // O finally sempre sera executado independete de erro ou não
  } finally {
    console.log("Obrigado por pedir conosco. Volte sempre!");
  }
};

makeOrder();
