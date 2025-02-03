/* Faça um algoritimo que dado as 3 notas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (Nota 1 + Nota 2 + Nota 3) / 3;

Classificação:
- Média menor que 5, Reprovação;
- Média entre 5 e 7, Recuperação;
- Média acima de 7, Aprovado no semestre; */

const nota1 = 6;
const nota2 = 10;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado no Semestre');
}