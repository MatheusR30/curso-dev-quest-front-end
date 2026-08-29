const user = { name: "João", age: 25 };

// serializacao (OBJETO PARA STRING)
const userString = JSON.stringify(user);

// desserializacao (String para Objeto)
const userObjeto = JSON.parse(userString);

console.log(user);
console.log(typeof user);

console.log(userString);
console.log(typeof userString);

console.log(userObjeto);
console.log(typeof userObjeto);
