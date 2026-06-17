const prompt = require("prompt-sync")();

let tarefas = [];
let i;

for (i = 0; i < 5; i++) {
    tarefas[i] = prompt("Informe uma tarefa: ");
}

tarefas.shift();

console.log("Array atualizado:");
console.log(tarefas);
