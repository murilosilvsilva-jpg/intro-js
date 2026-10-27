// Os operadores aritméticos são utilizados para realizar operações matemáticas, como por exemplo: somar, subtrair, multiplicar e dividir.

const preco = 50;
const frete = 15; 

// 1 - Adição ( + )
// Ultilizamos esse operador para a soma de valores
const soma = preco + frete

console.log( preco + frete )
console.log(15 + 10)
console.log(soma);

console.log("-------------------")

// 2 - Subritação ( - )
// Ultilizamos esse operador para realizar a subtração de valores
const subritacao = preco - frete

console.log( preco - frete )
console.log(15 - 10)
console.log(subritacao);

console.log("-------------------")

// 3 - Multiplicação ( * )
// Ultilizamos esse operador para realizar a multiplicação de valores
const multiplicacao = preco * frete

console.log( preco * frete )
console.log(15 * 10)
console.log(multiplicacao);

console.log("-------------------")

// 4 - Divisão ( / )
// Ultilizamos esse operador para realizar a divisão de valores
const divisao = preco / frete

console.log( preco / frete )
console.log( 10 / 0 )
console.log(divisao);

console.log("-------------------")

// 5 - Expotenciação ( ** )
// Ultilizamos esse operador para realizar a exponenciação de valores, ou seja, elevar um número a uma potência
const exponenciacao = preco ** frete

console.log( preco ** frete )
console.log( 2 ** 5 )
console.log(exponenciacao);

console.log("-------------------")

// 6 - Resto da divisão (%)
// Operador % retorna o RESTO DA DIVISÃO, não o resultado em si.
// Utilizamos esse operador para verificar se um número é impar ou par.

console.log(8 % 2); //resto 0
console.log(7 % 2); //resto 1

console.log("-------------------")

// 7 - Incremento ( ++ )
// Esse operador serve para aumentar o valor de uma variavel em uma unidade ( 1 )
let contador = 5;
console.log(contador);

contador++
console.log(contador);

// 8 - Operador de decremento ( -- )
// Esse operador serve para diminuir o valor de uma variavel em uma unidade ( 1 )
let vidas = 3;
console.log(vidas);

vidas--
console.log(vidas);