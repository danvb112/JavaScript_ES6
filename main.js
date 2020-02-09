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

// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);