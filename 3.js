const prompt = require("prompt-sync")();

let filmes = [];
let i;

for (i = 0; i < 5; i++) {
    filmes[i] = prompt("Informe o nome de um filme: ");
}

console.log("Primeiro filme cadastrado: " + filmes[0]);
console.log("Último filme cadastrado: " + filmes[4]);
console.log("Quantidade de filmes cadastrados: " + filmes.length);
