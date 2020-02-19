class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return false;
    }
};

class Admin extends Usuario {
    
    isAdmin() {
        return true;
    };

}

const user1 = new Usuario("email@teste.com", "senha123");
const admin1 = new Admin('email@teste.com', 'senha123');

console.log(user1.isAdmin());
console.log(admin1.isAdmin());