// Función para manejar el envío del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validación simple
    if(nombre && email && mensaje) {
        alert('¡Gracias ' + nombre + '! Tu mensaje ha sido enviado. Te contactaremos pronto.');
        // Limpiar formulario
        document.getElementById('formulario-contacto').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para los botones de compra
const botonesComprar = document.querySelectorAll('.btn-comprar');
botonesComprar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        const producto = this.parentElement.querySelector('h3').textContent;
        const precio = this.parentElement.querySelector('p').textContent;
        alert('Has agregado ' + producto + ' a tu carrito de compras.\n' + precio);
        
        // Cambiar texto del botón temporalmente
        const textoOriginal = this.textContent;
        this.textContent = '¡Agregado!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = textoOriginal;
            this.style.backgroundColor = '#c94c4c';
        }, 2000);
    });
});

// Cambiar color de fondo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
        header.style.backgroundColor = '#ffb6c1';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = '#ffccd5';
        header.style.boxShadow = 'none';
    }
});

// Navegación suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Mensaje de bienvenida en consola
console.log('¡Bienvenido a Pastelería Dulce Sabor!');
console.log('Estamos listos para endulzar tu día 🍰');
