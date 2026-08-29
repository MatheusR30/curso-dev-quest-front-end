/*
📝 Instruções do Exercício
Crie um objeto chamado `usuario` com as propriedades `nome` e `idade`. 
Depois, faça a desestruturação desse objeto em variáveis separadas: 
`nome`, `idade` e `cidade`. Caso `cidade` não exista no objeto, atribua
o valor padrão `'Desconhecida'`. Use também o rest operator para capturar 
as demais propriedades do objeto em uma variável chamada `resto`. Em seguida,
crie um novo objeto chamado `novoUsuario`, juntando `nome`, `cidade` e todas 
as propriedades capturadas em `resto`. Exiba no console o objeto `novoUsuario`. 
*/

const usuario = {
  nome: "Matheus",
  idade: 30,
};

// Desestruturação com valor padrão, com o resto
//O rest operator (...) é usado para capturar as propriedades restantes do objeto
//que não foram desestruturadas. No caso, como você já desestruturou nome, idade e cidade,
//o operador rest capturará qualquer outra propriedade que exista no objeto usuario (se houver).
const { nome, idade, cidade = "Desconhecida", ...resto } = usuario;

const novoUsuario = {
  nome,
  cidade,
  ...resto,
};

console.log(novoUsuario);
