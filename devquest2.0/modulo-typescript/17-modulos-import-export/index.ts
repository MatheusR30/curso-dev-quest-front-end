import { paginationPerPage, Customer } from "./customer";

// a interface Special esta estendendo as propriedaeds da interface  //Customer
interface SpecialCustomer extends Customer {
  cuponQuantity: number;
}

// a variavel recebe como um tipo a interface
const specialCustomer: SpecialCustomer = {
  cuponQuantity: 10,
  name: "Maria",
  age: 32,
};
