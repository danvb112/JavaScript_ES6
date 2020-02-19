const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: "Gabriel", idade: 15, empresa: "Rocketseat"},
    {nome: "Lucas", idade: 30, empresa:"Facebook"},
];

function funcionarios(usuarios){
    var funcioario = usuarios.filter(function(usuario){
        if (usuario.empresa === "Rocketseat" && usuario.idade > 18){
            return console.log(usuario);
        } else {
            return false;
        }
    });
}

funcionarios(usuarios);