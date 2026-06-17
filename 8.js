const prompt = require("prompt-sync")();

let filmes = [];
let i;
let posicao;
let novoFilme;

for (i = 0; i < 5; i++) {
    filmes[i] = prompt("Informe um filme: ");
}

posicao = Number(prompt("Informe a posição do filme que deseja alterar (0 a 4): "));
novoFilme = prompt("Informe o novo nome do filme: ");

filmes[posicao] = novoFilme;

console.log("Array atualizado:");
console.log(filmes);
