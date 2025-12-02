// Cargar menu y pie en todas las paginas
function cargarMenu() {
    fetch('menu.html')
    then(function(respuesta) {
        return respuesta.text()
    })
    then(function(html) {
        var menuDiv = document.getElementById('menu')
        if (menuDiv) {
            menuDiv.innerHTML = html
        }
    })
    catch(function(error) {
        console.log('Error')
    })
}

function cargarFinal() {
    fetch('final.html')
    then(function(respuesta) {
        return respuesta.text()
    })
    then(function(html) {
        var finalDiv = document.getElementById('final')
        if (finalDiv) {
            finalDiv.innerHTML = html
        }
    })
    catch(function(error) {
        console.log('Error')
    })
}

// Ejecutar cuando cargue la pagina
window.onload = function() {
    cargarMenu()
    cargarFinal()
    
    // Si estamos en productos.html, cargar carrito
    if (document.getElementById('carritoItems')) {
        mostrarCarrito()
    }
}

// Sistema de carrito
var productos = [
    {id: 1, nombre: "Cafe Colombiano", precio: 12000},
    {id: 2, nombre: "Cafe Brasileño", precio: 10500},
    {id: 3, nombre: "Cafe de la Casa", precio: 11800}
]

function obtenerCarrito() {
    var carrito = localStorage.getItem('carrito')
    return carrito ? JSON.parse(carrito) : []
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function agregarCarrito(idProducto) {
    var producto = productos.find(function(p) {
        return p.id === idProducto
    })
    
    if (!producto) return
    
    var carrito = obtenerCarrito()
    var item = carrito.find(function(item) {
        return item.id === idProducto
    })
    
    if (item) {
        item.cantidad += 1
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }
    
    guardarCarrito(carrito)
    mostrarCarrito()
    alert('Agregado al carrito: ' + producto.nombre)
}

function mostrarCarrito() {
    var contenedor = document.getElementById('carritoItems')
    var totalSpan = document.getElementById('total')
    
    if (!contenedor || !totalSpan) return
    
    var carrito = obtenerCarrito()
    var html = ''
    var total = 0
    
    if (carrito.length === 0) {
        html = '<p>Carrito vacio</p>'
    } else {
        for (var i = 0; i < carrito.length; i++) {
            var item = carrito[i]
            var subtotal = item.precio * item.cantidad
            total += subtotal
            
            html += '<p>' + item.nombre + ' x' + item.cantidad + ' = $' + subtotal + '</p>'
        }
    }
    
    contenedor.innerHTML = html
    totalSpan.textContent = total
}

function comprar() {
    var carrito = obtenerCarrito()
    
    if (carrito.length === 0) {
        alert('El carrito esta vacio')
        return
    }
    
    alert('Compra realizada! Gracias por tu compra.')
    localStorage.removeItem('carrito')
    mostrarCarrito()
}

// Funcion de contacto
function enviarContacto() {
    var nombre = document.getElementById('nombre')
    var email = document.getElementById('email')
    var mensaje = document.getElementById('mensaje')
    
    if (!nombre.value || !email.value || !mensaje.value) {
        alert('Por favor llena todos los campos')
        return
    }
    
    if (!email.value.includes('@')) {
        alert('Email no valido')
        return
    }
    
    alert('Mensaje enviado! Te contactaremos pronto.')
    nombre.value = ''
    email.value = ''
    mensaje.value = ''
}