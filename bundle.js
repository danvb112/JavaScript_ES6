"use strict";

var usuario = {
  nome: 'Daniel',
  idade: '21',
  endereco: {
    rua: "Laura Campelo",
    estado: 'PE'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    rua = _usuario$endereco.rua,
    estado = _usuario$endereco.estado;
console.log(nome);
console.log(idade);
console.log(rua);
console.log(estado);
