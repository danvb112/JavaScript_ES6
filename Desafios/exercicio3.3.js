const nome = "Diego";
const idade = "23";


const mostraUsuario = (nome = "Diego", idade = 18) => ({nome, idade});

console.log(mostraUsuario);