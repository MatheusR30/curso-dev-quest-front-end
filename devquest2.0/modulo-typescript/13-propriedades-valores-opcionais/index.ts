// usando o ponto ? o parammetro vira opcional
type Customer = {
  firstName: string;
  lastName?: string;
  age: number;
};

const newCustomer: Customer = {
  firstName: "Matheus",
  age: 21,
};

console.log(newCustomer);

function printName(firstName: string, lastName?: string) {
  console.log(`O primeiro nome é: ${firstName}`);
  console.log(`O último nome é: ${lastName}`);
}

printName("Matheus");

printName("Lucas", "Leao");
