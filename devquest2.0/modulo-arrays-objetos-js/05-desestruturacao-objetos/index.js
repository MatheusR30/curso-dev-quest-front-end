// desestruturacao de objetos

const user = {
  name: "John",
  age: 30,
  address: {
    street: "Rua Principal",
    number: 123,
  },
};

// const name = user.name;
// const age = user.age;
// const street = user.address.street;
// const number = user.address.number;

// console.log(name, age, street, number);

// Destruturação

// const, {} chaves, = user no caso o nome do objeto que queremos usar
const {
  name: clienteName,
  age,
  phone = "999999999", // valor padrão Com o sinal de igual
  address: { street, number },
} = user;

console.log(clienteName, age, street, number, phone);

//forma tradicional
const showAge = (user) => {
  console.log(user.age);
};

showAge(user);

const usuario = {
  nome: "João",
};

// Desestruturação com valor padrão
const { nome, idade = 25 } = usuario;

console.log(nome); // Saída: João
console.log(idade); // Saída: 25 (valor padrão)

// forma com destruturação
const showAgeDestructured = ({ name, age }) => {
  console.log(name, age);
};

showAgeDestructured(user);
