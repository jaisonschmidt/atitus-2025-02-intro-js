// iterar em todos os números
// criar uma variável para anotar os elementos que já vimos
// includes

const numeros = [1, 2, 2, 3, 3, 4, 5, 5]; 
const elementosUnicos = [];

for (let i = 0; numeros.length > i; i++) {
    // vamos verificar se o numero atual numeros[i]
    // não esta no array de numerosUnicos
    if (!elementosUnicos.includes(numeros[i])) {
        elementosUnicos.push(numeros[i]);
    }
}

console.log(elementosUnicos.length);