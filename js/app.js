const cartela = document.querySelector('.container');
const sortNumber = document.querySelector('.sortNumber');
const quantSort = document.querySelector('.quantSort');

let cartelaNumeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    32, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99
];

let escolhidos = [];

cartela.addEventListener('click', event => {

    if (event.target.className.includes('ponto')) {
        const clicked = event.target;
        clicked.classList.add('marcado');
    }

});

while (escolhidos.length <= 24) {
    let randomNumber = parseInt(Math.random() * 98);
    
    if (escolhidos.includes(cartelaNumeros[randomNumber])) {
        continue;
    } else {
        escolhidos.push(cartelaNumeros[randomNumber]);
    }
}

escolhidos.forEach((numero, index) => {
    if (index < 24) {
        document.querySelector(`.n-${index}`).innerText = numero;
    }
});

console.log(escolhidos);

let quant = 0; // registra a quantidade de números que foram sorteador //
let sorteados = []; // armazena todos os números sorteados //

const intervalo = setInterval(() => {
    const numero = parseInt(Math.random() * 98);

    // se o número sorteado não existir no array sorteados //
    // o número é adicionado nele e o contator é incrementado //
    if (!sorteados.includes(numero)) {
        sorteados.push(numero);
        sortNumber.innerText = numero;  
        quant++;
        quantSort.innerText = quant;
    } else {
        console.log('Esse número já foi sorteado!')
    }

    if (quant === 24) {
        clearInterval(intervalo);
    }

    if (escolhidos.includes(numero)) {
        document.querySelector(`.n-${escolhidos.indexOf(numero)}`).classList.add('marcado');
        console.log(`Valor: ${escolhidos[escolhidos.indexOf(numero)]} - Index: ${escolhidos.indexOf(numero)}`);
     }

}, 3000);