// Os operadores de comparação de comparação servem para comparar dois valores e verificar se uma determinada condição é verdadeira ou falsa

//DICA: No JavaScript, o resultado de uma comparação é sempre um valor booleano, ou seja, verdadeiro (true) ou false(falso)

// 1 - === Igualdade escrita
// O operador de igualdade estrita verifica se dois valores são iguais tanto em TIPO DE DADO e VALOR

console.log(10 === 10)
console.log(10 === 20)
console.log(10 === '10')

console.log("---------------------------")
// 2 - == Igualdade não estrita
// O operador de == também compara valores, mas , de forma resumida, observa apenas o VALOR da comaração, ignorando o tipo dado.

// CURIOSIDADE: Nesse caso, por debaixo dos panos, o JavaScript faz uma conversão de tipos antes de comparar.

console.log(10 == 10)
console.log(10 == 20)
console.log(10 == '10')

console.log("---------------------------")

// 3 - !== Diferença estrita
// Tanto o operador !== quanto o != verificam se os valores apresentados são diferentes. Porém, no caso do operador de !==, ele verifica também o tipo de dado.

console.log(5 !== 3)
console.log(5 !== 5)
console.log(5 !== "5")

console.log("---------------------------")

// 4 - != Diferença não estrita
// No caso desse operador, ele verifica apenas o valor, e não o tipo de dado.

console.log(5 != "5")
console.log(5 != 3)

console.log("---------------------------")

// 5 - > maior que
// Esse  operador serve para avaliar se um determinado valor é maior que outro

console.log(7 > 6) 
console.log(7 > 2)
console.log(7 > 9)
console.log(7 > 7)

console.log("---------------------------")

// 6 - > menor que
// Esse  operador serve para avaliar se um determinado valor é menor que outro

console.log(7 < 6) 
console.log(3 < 6)
console.log(2 < 5)
console.log(7 < 7)

console.log("---------------------------")

// 7 - >= Maior ou igual
// Esse operador valia se na condição, o elemento de comparação é maior ou igual.

const nota = 7
console.log(nota >= 7)
console.log(nota >= 8)

console.log("---------------------------")

// 8 - >= Menor ou igual
// Esse operador valia se na condição, o elemento de comparação é maior ou igual.


console.log(nota <= 7)
console.log(nota <= 8)
console.log(nota <= 6)


console.log("---------------------------")