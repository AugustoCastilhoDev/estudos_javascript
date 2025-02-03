/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const precoProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log('O valor pago foi de:', precoProduto - (100 * 0.10));
} else if (formaPagamento === 2) {
    console.log('O valor pago foi de:', precoProduto - (100 * 0.15));
} else if (formaPagamento === 3) {
    console.log('O valor pago foi de:', precoProduto);
} else {
    console.log('O valor pago foi de:', precoProduto + (100 * 0.10));
}
   