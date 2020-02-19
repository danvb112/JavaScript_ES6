const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: "Gabriel", idade: 15, empresa: "Rocketseat"},
    {nome: "Lucas", idade: 30, empresa:"Facebook"},
];

function idades(usuarios) {
    var todasIdades = usuarios.map(function (usuario){
        return usuario.idade;
    });
    console.log(todasIdades);
};

idades(usuarios);