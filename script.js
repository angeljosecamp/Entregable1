// Animación del titulo principal
const titulo = document.querySelector('.titulo-principal');
const texto = "Sobre Mi";
let index = 0;

function escribir() {
    if (index < texto.length) {
        titulo.textContent += texto.charAt(index);
        index++;
        setTimeout(escribir, 250);
    } else {
        // Cuando termine de escribir, limpiar el texto y reiniciar el índice
        setTimeout(() => {
            titulo.textContent = "";  // Limpiar el texto
            index = 0;                // Reiniciar el índice
            escribir();               // Volver a comenzar
        }, 1000);  // Pausa de 1 segundo antes de reiniciar
    }
}
titulo.textContent = ""; // Limpia el contenido inicial
escribir();

// Validación del form  
document.querySelector('#formulario-contacto').addEventListener('submit', function(evento) {
  evento.preventDefault();  // Evitar el envío del formulario

  // Limpiar mensajes de error anteriores
  document.querySelectorAll('.error').forEach(error => error.textContent = '');

  // capturar los valores del form
  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const asunto = document.querySelector('#asunto').value;

  let errores = false;

  // Validación del nombre
  if (nombre.trim() === '') {
    document.querySelector('#error-nombre').textContent = 'El nombre es obligatorio.';
    errores = true;
  }

  // validación del email
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email)) {
    document.querySelector('#error-email').textContent = 'Por favor ingresa un correo válido.';
    errores = true;
  }

  // Validación del asunto
  if (asunto.trim() === '') {
    document.querySelector('#error-asunto').textContent = 'El asunto es obligatorio.';
    errores = true;
  } else if (asunto.trim().length < 10) {
    document.querySelector('#error-asunto').textContent = 'El asunto debe tener al menos 10 caracteres.';
    errores = true;
  }

  if (!errores) {
    // Si no hay errores, simula el envío
    alert('Formulario enviado con éxito');
    // Limpiar los campos
    document.querySelector('#formulario-contacto').reset();
  }
});



//Contador de caracteres del form

const textarea = document.getElementById('asunto');
const maxCaracteres = 200; // Máximo de caracteres permitidos

let contador = document.getElementById('contador-caracteres');
if (!contador) { //si no existe contador se crea
    contador = document.createElement('p');
    contador.id = 'contador-caracteres';
    contador.textContent = `0 / ${maxCaracteres} caracteres`; //texto inicial
    textarea.parentNode.insertBefore(contador, textarea.nextSibling); //insertar el contador
}

// Agregar evento de entrada en el textarea
textarea.addEventListener('input', () => {
    const caracteres = textarea.value.length; // Contar caracteres actuales
    contador.textContent = `${caracteres} / ${maxCaracteres} caracteres`;// actualizar texto del contador
});


/*Footer dinámico */
const footerMessage = document.querySelector('footer h6');
const hour = new Date().getHours();

if (hour < 12) {
    footerMessage.textContent = "¡Buenos días! Espero que tengas un gran día. En esta página web estoy aprendiendo a programar. Gracias por visitar";
} else if (hour < 18) {
    footerMessage.textContent = "¡Buenas tardes! ¿Cómo va tu día?, en esta página web estoy aprendiendo a programar. Gracias por visitar";
} else {
    footerMessage.textContent = "¡Buenas noches!. En esta página web estoy aprendiendo a programar. Gracias por visitar.";
}
