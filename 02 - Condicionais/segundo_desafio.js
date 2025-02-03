/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1- Preço do etanol
2- Preço da Gasolina
3- O tipo de combustível que está no seu carro
4- Gasto médio de combustível do carro por KM;
5- Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar essa viagem. */


const precoEtanol = 5.20;
const precoGasolina = 6.50;
const distanciaEmKM = 100;
const KmPorLitro = 12;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKM / KmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2))
}
