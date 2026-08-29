// Um objeto é uma estrutra de dados que armazena
// valores pares chave-valor

const user = {
  name: "Matheus",
  age: 30,
  apresentar: function () {
    console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
  },
};

console.log(user.name);
console.log(user["age"]);

// Adicionar novas propriedades
user.job = "Developer";
console.log(user.job);

console.log(user);

user.name = "João";
console.log(user.name);
console.log(user);

user["name"] = "Maria";
console.log(user.name);
console.log(user);

// user.apresentar();

const userEduardo = {
  name: "Eduardo",
  age: 29,
  apresentar: function () {
    console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
  },
};

userEduardo.apresentar();

// Array de objetos

const products = [
  { id: 1, name: "Camisa", price: 29.9 },
  { id: 2, name: "Calça", price: 59.9 },
  { id: 3, name: "Tênis", price: 89.9 },
];

console.log(products[2].name);

products.forEach((product) => {
  console.log(product.name);
  console.log(product.price);
});
