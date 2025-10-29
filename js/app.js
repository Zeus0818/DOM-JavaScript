//Mostrando alerta nativa al enviar el formulario
document.addEventListener('DOMContentLoaded', () => {
    const datos = { nombre: '', email: '', mensaje: '' };

    const formulario = document.querySelector('.formulario');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const mensaje = document.querySelector('#mensaje');

    [nombre, email, mensaje].forEach(input => {
        input.addEventListener('input', leerTexto);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const { nombre, email, mensaje } = datos;

        if (nombre === '' || email === '' || mensaje === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        mostrarAlerta('Mensaje enviado correctamente', 'correcto');
    });

    function leerTexto(e) {
        datos[e.target.id] = e.target.value;
    }

    function mostrarAlerta(mensaje, tipo) {
        const alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add(tipo);
        document.querySelector('.formulario').appendChild(alerta);

        setTimeout(() => alerta.remove(), 3000);
    }
});
