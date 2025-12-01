document.getElementById('formulario-contacto').addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if(nombre && email && mensaje) {
        alert('¡Gracias ' + nombre + '! Tu mensaje ha sido enviado. Te contactaremos pronto.');
        document.getElementById('formulario-contacto').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

const botonesComprar = document.querySelectorAll('.btn-comprar');
botonesComprar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        const producto = this.parentElement.querySelector('h3').textContent;
        const precio = this.parentElement.querySelector('p').textContent;
        alert('Has agregado ' + producto + ' a tu carrito de compras.\n' + precio);
        
        const textoOriginal = this.textContent;
        this.textContent = '¡Agregado!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = textoOriginal;
            this.style.backgroundColor = '#c94c4c';
        }, 2000);
    });
});

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

console.log('¡Bienvenido a Pastelería Dulce Sabor!');
console.log('Estamos listos para endulzar tu día 🍰');
