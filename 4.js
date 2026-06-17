const prompt = require("prompt-sync")();

let nomes = [];
let i;
let novoNome;

for (i = 0; i < 5; i++) {
    nomes[i] = prompt("Informe um nome: ");
}

novoNome = prompt("Informe mais um nome: ");

nomes.push(novoNome);

console.log("Array atualizado:");
console.log(nomes);
