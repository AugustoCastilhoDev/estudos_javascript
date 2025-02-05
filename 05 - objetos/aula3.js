/* Classes e instâncias */

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const augusto = new Pessoa();
augusto.nome = 'Augusto C Castilho';
augusto.idade = 37;

const tulio = new Pessoa();
tulio.nome = 'Túlio M Castilho';
tulio.idade = 3;

augusto.descrever();
tulio.descrever();