document.addEventListener('DOMContentLoaded', function() {
    
    // Funcionalidad del selector de idioma
    const selectorIdioma = document.querySelectorAll('seleccion select')[0];
    if (selectorIdioma) {
        selectorIdioma.addEventListener('change', function() {
            const idiomaSeleccionado = this.value;
            console.log('Idioma seleccionado:', idiomaSeleccionado);
            // Aquí puedes agregar lógica para cambiar el idioma
            alert('Funcionalidad de cambio de idioma a ' + idiomaSeleccionado + ' estará disponible próximamente');
        });
    }
    
    // Funcionalidad del menú de cuenta
    const selectorCuenta = document.querySelectorAll('seleccion select')[1];
    if (selectorCuenta) {
        selectorCuenta.addEventListener('change', function() {
            const opcionSeleccionada = this.value;
            
            switch(opcionSeleccionada) {
                case 'Iniciar Sesión':
                    alert('Redirigiendo a página de inicio de sesión...');
                    // window.location.href = 'login.html';
                    break;
                case 'Registrarse':
                    alert('Redirigiendo a página de registro...');
                    // window.location.href = 'register.html';
                    break;
                case 'Mis Pedidos':
                    alert('Redirigiendo a mis pedidos...');
                    // window.location.href = 'pedidos.html';
                    break;
                case 'Contacto':
                    alert('Redirigiendo a contacto...');
                    // window.location.href = 'contacto.html';
                    break;
                case 'Libro de Reclamaciones':
                    alert('Redirigiendo al libro de reclamaciones...');
                    // window.location.href = 'reclamaciones.html';
                    break;
            }
            
            // Resetear el select a la opción por defecto
            this.selectedIndex = 0;
        });
    }
    
    // Agregar interactividad a las tarjetas de pasteles
    const tarjetas = document.querySelectorAll('tarjeta-pastel');
    
    tarjetas.forEach(function(tarjeta) {
        tarjeta.addEventListener('click', function() {
            const nombrePastel = this.querySelector('h3').textContent;
            const descripcion = this.querySelector('p').textContent;
            
            alert('🎂 ' + nombrePastel + '\n\n' + descripcion + '\n\n¿Te gustaría hacer un pedido?');
        });
    });
    
    // Animación al hacer scroll
    window.addEventListener('scroll', function() {
        const elementos = document.querySelectorAll('tarjeta-pastel');
        
        elementos.forEach(function(elemento) {
            const posicion = elemento.getBoundingClientRect().top;
            const pantalla = window.innerHeight;
            
            if (posicion < pantalla - 100) {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Inicializar opacidad de tarjetas para animación
    tarjetas.forEach(function(tarjeta) {
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(20px)';
        tarjeta.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Resaltar enlace activo en navegación
    const enlaces = document.querySelectorAll('nav a');
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
    
    enlaces.forEach(function(enlace) {
        if (enlace.getAttribute('href') === paginaActual) {
            enlace.style.textDecoration = 'underline';
            enlace.style.fontWeight = 'bold';
        }
    });
    
    // Efecto hover mejorado para el logo
    const logo = document.querySelector('logo-img');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg) scale(1.1)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }
    
    // Mensaje de bienvenida
    console.log('🎂 Bienvenido a Pastelería Dulce Encanto 🎂');
    console.log('Los mejores pasteles artesanales de la ciudad');
    
});