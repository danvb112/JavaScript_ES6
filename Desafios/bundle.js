"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: "Gabriel",
  idade: 15,
  empresa: "Rocketseat"
}, {
  nome: "Lucas",
  idade: 30,
  empresa: "Facebook"
}];
var newUsuarios = usuarios.map(function (usuario) {
  return usuario.idade * 2;
});

function buscarUsuario(newUsuarios) {
  var funcionarios = newUsuarios.filter(function funcionario(usuario) {
    if (usuario.idade <= 50) {
      return console.log(usuario);
    } else {
      return console.log(undefined);
    }
  });
}

;
buscarUsuario(usuarios);
