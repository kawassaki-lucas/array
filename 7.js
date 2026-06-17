const prompt = require("prompt-sync")();

let cidades = [];
let i;
let novaCidade;

for (i = 0; i < 5; i++) {
    cidades[i] = prompt("Informe uma cidade: ");
}

novaCidade = prompt("Informe mais uma cidade: ");

cidades.unshift(novaCidade);

console.log("Array atualizado:");
console.log(cidades);
