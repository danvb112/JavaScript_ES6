const usuario = {
    nome: 'Daniel',
    idade: '21',
    endereco: {
        rua: "Laura Campelo",
        estado: 'PE'
    }
};


const {nome, idade, endereco: {rua, estado} } = usuario;

console.log(nome);
console.log(idade);
console.log(rua);
console.log(estado);