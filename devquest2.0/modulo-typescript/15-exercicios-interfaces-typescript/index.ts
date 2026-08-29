interface User {
  id: number;
  name: string;
  email: string;
}

const IUsuario: User = {
  id: 1,
  name: "Matheus",
  email: "Matheus@gmail.com",
};

console.log(`ID: ${IUsuario.id}`);
console.log(`Nome: ${IUsuario.name}`);
console.log(`Email: ${IUsuario.email}`);
