const orderPizza = () => {
  return new Promise((resolve) => {
    console.log("pedido da pizza enviado para a cozinha...");

    setTimeout(() => {
      resolve("Pizza pronta!");
    }, 3000);
  });
};
// simular uma api que entrega a pizza
const deliverPizza = () => {
  return new Promise((resolve) => {
    console.log("A pizza esta a caminho...");

    setTimeout(() => {
      resolve("Pizza entregue!");
    }, 3000);
  });
};
/*orderPizza().then((message) => {
  console.log(message);

  deliverPizza().then((message) => {
    console.log(message);
  });
}); */
const makeOrder = async () => {
  const pizzaMessage = await orderPizza();
  console.log(pizzaMessage);

  const deliverPizzaMessage = await deliverPizza();
  console.log(deliverPizzaMessage);
};

makeOrder();
