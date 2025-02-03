function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Augusto');
sayMyName('Túlio');


console.log('_______________________________________');
/* Esse console.log foi apenas para separar o codigo */

function quadrado(valor) {
    return valor * valor;
}


const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)


console.log('_______________________________________');
/* Esse console.log foi apenas para separar o codigo */

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 20));

console.log('_______________________________________');
/* Esse console.log foi apenas para separar o codigo */


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

verificarIdade(18);