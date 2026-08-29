"use strict";
function userGenerico({ nome, idade, genero = "masculino" }) {
    console.log("Nome: ", nome);
    console.log("Idade: ", idade);
    console.log("Gênero: ", genero);
}
userGenerico({ nome: "Laura", idade: 25, genero: "feminino" });
userGenerico({ nome: "Lucas", idade: 30 });
