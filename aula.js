/*
const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan'); // Exemplo para adicionar alguém na lista.

alunos[3] = 'Vinicius'; // Aqui estou substituindo o vinicius no lugar do renan por exemplo.

console.log(alunos);
console.log(alunos[4]); // Aqui recebe um valor undefined porque não existe uma quarta pessoa na lista.
*/



/*
const alunos = [] // Posso iniciar/criar uma lista vazia também.

alunos.push('teste');
alunos.push(10); // Posso ter na minha lista outros valores além de string por exemplo, mas dificilmente misturamos tipos de valores na mesma lista, é comum utilizarmos apenas um tipo pra toda lista.
alunos.pop(); // Remove o último dado que tem na minha lista.
console.log(alunos);
*/



/*
const alunos = ['1', '2', '3'];

console.log(alunos);
// console.log(alunos.pop()); // Quando utilizo o .pop ele tira o últmo valor da lista e imprime esse valor direto na tela.

console.log(alunos.shift()); // No shift é o contrário, ele pega o primeiro valor e imprime esse valor direto na tela.
console.log(alunos);
*/



/*
const notas = [];

notas.push(5); // Objetivo aqui é somar todos esses valores e dividir pelo tamanho da lista. Aqui irei somar todos os valores e dividir por 5 para saber a média do aluno no final do ano.

notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

// console.log(notas.length); // length mostra o tamanho da lista.
console.log(soma / 5); // ou por notas.length no lugar do 5.
*/



/*
// Outro exemplo percorrendo Lista.

const nome = 'Liliane Rodrigues Pamplona';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
    
}
*/



// Neste exemplo utilizaremos o primeiro exemplo de estruturas de repetições (existem outros), para que consigamos percorrer a lista dinâmicamente e pegar os valores para ir somando.

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
// console.log(notas.length); // length mostra o tamanho da lista.
console.log(media);
