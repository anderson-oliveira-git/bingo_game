const cartela = document.querySelector('.container');

let cartelaNumeros = [];

cartela.addEventListener('click', event => {

    if (event.target.className.includes('ponto')) {
        const clicked = event.target;
        clicked.classList.add('marcado');
    }

});