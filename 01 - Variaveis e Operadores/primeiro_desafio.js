/*Desafio:

Faça um progama para calcular o valor de uma viagem

Você terá 3 variáveis, sendo elas:
    1 - Preço do combustível
    2 - Gasto médio do combustível do carro por KM
    3 - DIstância em KM da viagem

imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

const precoCombustível = 6.20;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustível;

console.log(valorGasto.toFixed(2));