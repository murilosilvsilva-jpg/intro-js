// Um aray é uma estrutura de dados utilizada para armazenar uma coleção(lista) de valores dentro de uma ÚNICA variavel.

let aluno1 = "Luis";
let aluno2 = "Murilo";
let aluno3 = "Leila";
let aluno4 = "Sacuma";
let aluno5 = "Guilherme";
let aluno6 = "Clarinha";

// Organizando estruturas com arrays
// A estrutura de um array é representada por []
const alunos = ["Luis", "Murilo", "Leila", "Sacuma", "Guilherme", "Clarinha" ]

console.log(alunos);

// Acessando informações de um array
console.log("--- Acessando elementos ---");
console.log(alunos[0]);
console.log(alunos[3]);

// Acessando um elemento sem valor definido
console.log(alunos[6]);


// Descobrindo o tamanho de um array
// Biel
console.log("O tamanho do array é: ", aluno.length);


// Iterando sobre um array
console.log("--- Percorrendo array - For ---");

for (let index = 0; index < alunos.length; index++) {

    const element = alunos[index];
    console.log(element);
}

console.log("--- Percorrendo array - For/of ---");
for (let aluno of alunos){
    console.log(aluno);
    
}

console.log("--- Percorrendo array - forEach ---");

alunos.forEach((aluno)=>{
    console.log(aluno)
})

// Métodos importantes dos arrays
const frutas = ["Banana", "Maça", "Pêra", "Manga", "Uva"];


// 1 - Includes (Verifica se um elemento existe)
console.log("--- Includes ---");
console.log(frutas.includes("Banana"));
console.log(frutas.includes("Goiaba"));

// 2 - indexOf (Verifica a posição de um elemento)
console.log("--- indexOf ---");
console.log(frutas.indexOf("Goiaba"));
console.log(frutas.indexOf("Banana"));


// 3 - find (Encontrar um elemento)
// 0 find() retorna o primeiro elemento que atende a condição especificada.
console.log("--- find ---");
const notas = [4, 5, 7, 8, 8, 9.34, 10]

const resultado = notas.find((nota)=> {
    return nota > 7
})

console.log(resultado);

// 4 - filter()
// Diferente do find, o filter retorna todos os elementos que atendem uma determinada condição
console.log("--- filter() ---");

// filter com retorno explicito
const aprovados = notas.filter((nota)=>{
    return nota >= 7;
})

// filter com retorno implicito
const reprovados = notas.filter(nota => nota < 7);


console.log(aprovados);
console.log(reprovados);


// Manipulando array
const animais =  ["Cachorro", "Pássaro", "Orritorrinco"];

console.log(animais)

console.log("--- push() ---");
// Isere um elemento no final do array
animais.push("Gurila");

console.log("--- unshitf() ---");
// Isere um elemento no final do array
animais.unshift("Girafa");

console.log("--- pop() ---");
//Remove o último elemento da lista
animais.pop();

console.log("--- shift() ---");
//Remove o primeiro elemento da lista
animais.shift();

// Tipos de dados que um array suporta
const dados = [
    "João Predo",
    18, 
    true,
    null,
    undefined,
    {cidade: "SP"},
    [1,2,3,["kkkkkkkkk"]],
    function(){
        console.log("Olá");
    }
]

dados[7]();
console.log(dados[1]);
console.log(dados[6][3][0]);


// Exemplo prático 
const students = [
    {
        nome: "Leila",
        idade: 18,
        linguagens: ["HTML", "CSS", "JavaScript"],
        ativo: true
    },
    {
        nome: "Gabriel",
        idade: 18,
        linguagens: ["Python", "Java"],
        ativo: true
    },
    {
        nome: "Kauã",
        idade: 20,
        linguagens: ["PHP","JavaScript", "HTML"],
        ativo: false
    }
]

// para um estudante da lista de estudantes, faça...
for(let students of students){
    console.log("---- Alun@ ----");
    console.log(students.nome);
    console.log(students.idade);
    console.log(students.linguagens);
    console.log(students.ativo);
}