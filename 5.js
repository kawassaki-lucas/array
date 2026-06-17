const prompt = require("prompt-sync")();

let produtos = [];
let i;

for (i = 0; i < 5; i++) {
    produtos[i] = prompt("Informe um produto: ");
}

produtos.pop();

console.log("Lista de produtos após remover o último:");
console.log(produtos);
