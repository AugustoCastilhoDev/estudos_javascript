/* Criando instâncias com constructor*/

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const augusto = new Pessoa('Augusto', 37);
const tulio = new Pessoa('Túlio', 3);

console.log(augusto);
console.log(tulio);