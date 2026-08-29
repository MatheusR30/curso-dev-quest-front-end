// setItem, setar, inseir dados
localStorage.setItem("name", "Matheus");
localStorage.setItem00("age", "30");

//O Local Storage só guarda String, para guardar uma array, ou objeto, teremos que tranformar em um json
const usuario = {
  name: "Matheus Rodrigues",
  age: 30,
  email: "Matheus@gmail.com",
};

// Quero transformar de OBJETO para STRING.
localStorage.setItem("usuario", JSON.stringify(usuario));

const produtos = [
  { id: 1, nome: "Produto 1", preco: 90 },
  { id: 2, nome: "Produto 2", preco: 60 },
  { id: 3, nome: "Produto 3", preco: 80 },
  { id: 4, nome: "Produto 4", preco: 120 },
  { id: 5, nome: "Produto 5", preco: 150 },
];

localStorage.setItem("produtos", JSON.stringify(produtos));

// recuperando o valor chave, armazenado em localStorage
const userName = localStorage.getItem("Nome");
// console.log(userName);

// recuperando o valor armazenaod em localStorage, em formato String
const userJson = localStorage.getItem("usuario");
// console.log(userJson);
// console.log(typeof userJson);

// transformando de String para Objeto
const userObject = JSON.parse(userJson);
// console.log(userObject.age);
// console.log(typeof userObject);

const productsJson = localStorage.getItem("produtos");
// parse seria INTERPRETAR
const productsArray = JSON.parse(productsJson);
console.log(productsArray[0].nome);
console.log(typeof productsArray);

// remove itens individualmente, usando a ideia chave-valor
localStorage.removeItem("perfectpixel-panel");

// Nao precisa de paremetro, apaga todos
// localStorage.clear();
