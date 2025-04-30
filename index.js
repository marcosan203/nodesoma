let readlineSync = require('readline-sync');

let n = 1;
let i = 1;
let total = 0;

while (n != 0) {
    n = parseFloat(readlineSync.question(`Informe o ${i} numero: `));
    total += n;
    i++;
}

console.log(`programa que soma ${i - 1} numeros`);
console.log(`Total = ${total}`);