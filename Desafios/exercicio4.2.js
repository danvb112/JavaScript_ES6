const usuario = {
    nome: "Diego",
    idade: "23",
};

const {nome, idade} = usuario;

function mostrainfo(nome,idade) {
    return console.log(`${nome} tem ${idade} anos.`);
}

mostrainfo(nome,idade)