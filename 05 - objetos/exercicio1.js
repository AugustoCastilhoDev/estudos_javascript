/* 1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    calcularGastoEmReais(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedio * precoCombustivel;
    }
}


const uno = new Carro('Fiat', 'Prata', 1/13);
console.log(uno);
console.log(uno.calcularGastoEmReais(50, 6.20));

const palio = new Carro ('Fiat', 'Prata', 1/12)
console.log(palio);
console.log(palio.calcularGastoEmReais(50, 6.20));