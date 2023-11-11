// Definición de variables
let cantidad = document.querySelector('.cantidad');
let total = document.querySelector('.valor-total');
let menos = document.querySelector('.b-menos');
let mas = document.querySelector('.b-mas');
let precio = 400000

// Asignación del precio al HTML
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

// Evento del botón menos
menos.onclick = function () {
    cantidad.innerHTML--;
    total.innerHTML = (cantidad.innerHTML * precio).toLocaleString('es-CL');
};

// Evento del botón más
mas.onclick = function () {
    cantidad.innerHTML++;
    total.innerHTML = (cantidad.innerHTML * precio).toLocaleString('es-CL');
};