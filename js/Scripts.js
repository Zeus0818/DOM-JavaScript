// --- SELECCIÓN DE ELEMENTOS ---
const textoHeading = document.querySelector('.header__texto h2');
textoHeading.textContent = 'Nuevo Heading';

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto enlace';
enlaces[0].classList.add('navegacion__enlace--nuevo');
enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('nueva-clase');

// --- CREAR Y AGREGAR NUEVOS ELEMENTOS ---
const nuevoEnlace = document.createElement('A');
nuevoEnlace.classList.add('navegacion__enlace');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Un Nuevo Enlace';

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// --- EVENTOS DE CARGA DEL DOCUMENTO ---
console.log('1');

window.addEventListener('load', () => {
    console.log('2'); // Todo el sitio (HTML, CSS, imágenes) cargado
});

window.onload = () => {
    console.log('3');
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('4'); // Solo HTML cargado
});

console.log('5');

// --- FORMULARIO Y EVENTOS ---
const datos = { nombre: '', email: '', mensaje: '' };
const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('.formulario input[type=submit]');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    // Mostrar alerta nativa cuando el formulario se está enviando
    alert('Enviando...');

    mostrarMensaje('Mensaje enviado correctamente');
});

function mostrarError(mensaje) {
    mostrarAlerta(mensaje, 'error');
}

function mostrarMensaje(mensaje) {
    mostrarAlerta(mensaje, 'correcto');
}

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add(tipo);
    formulario.appendChild(alerta);

    setTimeout(() => alerta.remove(), 3000);
}

// --- EVENTOS DE LOS INPUTS ---
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

[nombre, email, mensaje].forEach((input) => {
    input.addEventListener('input', leerTexto);
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}
