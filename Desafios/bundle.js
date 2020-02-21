"use strict";

var usuario = {
  nome: "Diego",
  idade: "23"
};
var nome = usuario.nome,
    idade = usuario.idade;

function mostrainfo(nome, idade) {
  return console.log("".concat(nome, " tem ").concat(idade, " anos."));
}

mostrainfo(nome, idade);
