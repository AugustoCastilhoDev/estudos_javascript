/* O IMC - Indice de Massa corporal é um critério da Organização Mundial da saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:

IMC = peso / (altura * altura);

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
 - Abaixo de 18.5 abaixo do peso;
 - Entre 18.5 e 25 peso normal;
 - Entre 26 e 30 Acima do peso;
 - Entre 31 e 40 Obeso;
 - Acima de 41 Obesidade grave; */

 const peso = 60;
 const altura = 1.73;
 const imc = peso / (altura * altura);

 console.log(imc.toFixed(2));

 if (imc < 18.5) {
    console.log('Abaixo do peso');
 } else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal');
 } else if (imc >= 26 && imc <= 30) {
    console.log('Acima do Peso');
 } else if (imc >= 30 && imc <= 40) {
    console.log('Obesidade');
 } else {
    console.log('Obesidade Grave');
 }