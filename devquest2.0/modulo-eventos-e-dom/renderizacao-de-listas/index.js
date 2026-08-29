// Array de frutas
const frutas = ["Maçã", "Banana", "Uva"];

const lista = document.getElementById("frutas");

//metodo - foreach/Para cada.
frutas.forEach((fruta) => {
  const item = document.createElement("li");

  // Insere o nome da fruta no conteudo da li
  item.textContent = fruta;

  //adicionar um filho
  lista.appendChild(item);
});

const products = [
  {
    id: 1,
    name: "Camiseta Dev em Dobro Preta",
    image: "./assets/camiseta-1.png",
    price: 3500,
    color: "Preto",
    size: "M",
  },
  {
    id: 2,
    name: "Camiseta Dev em Dobro Roxa",
    image: "./assets/camiseta-2.png",
    price: 2500,
    color: "Roxa",
    size: "G",
  },
  {
    id: 3,
    name: "Camiseta Dev em Dobro Preta - Costas",
    image: "./assets/camiseta-1-costas.png",
    price: 1500,
    color: "Preto",
    size: "G",
  },
  {
    id: 4,
    name: "Camiseta Dev em Dobro Roxa - Costas",
    image: "./assets/camiseta-2-costas.png",
    price: 6000,
    color: "Roxa",
    size: "M",
  },
  {
    id: 5,
    name: "Caneca Dev em Dobro",
    image: "./assets/caneca.png",
    price: 500,
    color: "Branca",
    size: "M",
  },
];

//renderizando arrays de objetos do HTML

const listaProdutos = document.getElementById("produtos");
const renderizarProdutos = () => {
  //   HTML interno
  listaProdutos.innerHTML = products
    .map((product) => {
      return `
        <li>
            <img src="${product.image}" alt="${product.name}"
            <p>${product.name}</p>
            <p>${product.color}</p>
            <p>${product.size}</p>
            <p>${product.price}</p>
            <button type="button">Comprar</button>
        </li> 
    `;
      //Ao usar somente o map vazio, como ele usa Strings, ele usa virgula, já que a virgula é usada ao final de cada linha
      //para que isso nao aconteça, uma opcao é usar o .join(" ")
    })
    .join("");
};

renderizarProdutos();
