// Criando um objeto, dando duas propriedades
type Customer = {
  name: string;
  age: number;
};

function showCustomerInfor(customer: Customer) {
  console.log(`O nome do cliente é: ${customer.name}`);
  console.log(`O nome do cliente é: ${customer.age}`);
}
