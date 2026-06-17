const prompt = require("prompt-sync")();
let numeros = [];
let i;
let pares = 0;
for (i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Informe um número: "));
    if (numeros[i] % 2 == 0) {
        pares++;
    }
}
console.log("Quantidade de números pares: " + pares);
