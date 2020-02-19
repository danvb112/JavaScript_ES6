const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: "Gabriel", idade: 15, empresa: "Rocketseat"},
    {nome: "Lucas", idade: 30, empresa:"Facebook"},
];

function buscaEmpresa(usuarios) {
    var checar = usuarios.find(function funcionarios(usuario){
        if (usuario.empresa === "Google"){
            return console.log(usuario)
        } else{
            return console.log(undefined)
        }
    })
}

buscaEmpresa(usuarios);