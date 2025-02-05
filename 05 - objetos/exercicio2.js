/* 2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC. */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
       const imc = this.calcularImc();

       if (imc < 18.5) {
        return ('Abaixo do peso');
     } else if (imc >= 18.5 && imc <= 25) {
        return ('Peso Normal');
     } else if (imc >= 26 && imc <= 30) {
        return ('Acima do Peso');
     } else if (imc >= 30 && imc <= 40) {
        return ('Obesidade');
     } else {
        return ('Obesidade Grave');
     }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const augusto = new Pessoa('Augusto', 60, 1.73);

console.log(jose, `O valor do IMC é: ${jose.calcularImc().toFixed(2)}`, jose.classificarImc());

console.log(augusto, `O valor do IMC é: ${augusto.calcularImc().toFixed(2)}`, augusto.classificarImc());