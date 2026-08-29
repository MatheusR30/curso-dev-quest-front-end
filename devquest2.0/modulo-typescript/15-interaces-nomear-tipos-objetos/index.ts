// criando interfaces
interface ICustomer {
  name: string;
  age: number;
}

interface IAdrres {
  street: string;
}

// Usando o extends, para dizer o que estou querendo extender, apartir do ICustomer, isso que significa HERANÇA
interface ICustomerProfile extends ICustomer, IAdrres {}

const newProfile: ICustomerProfile = {
  name: "Matheus",
  age: 35,
  street: "Rua Jair Rosa Pinto",
};

// Para fazer o mesmo do Infarface,
type TCustomer = {
  name: string;
  age: number;
};

type TAdrres = {
  street: string;
};

// O type nao tem o extends, mas isso funciona igual
type TCustomerProfile = TCustomer & TAdrres;

const newProfile2: TCustomerProfile = {
  name: "Matheus",
  age: 35,
  street: "Rua Jair Rosa Pinto",
};
