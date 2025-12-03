// js/primerejemplo.js
console.log("Hola Mundo");

function Avion() {
    // Cambia la imagen del elemento con id 'avion'
    document.getElementById('avion').src = 'imagenes/avion.jpg';
    // Mensaje neutral
    alert("Imagen cambiada a avión");
}

function destruido() {
    // Cambia la misma imagen (puedes cambiar el id si quieres otra imagen)
    document.getElementById('avion').src = 'imagenes/destruido.png';
    alert("Imagen cambiada a estado destruido");
}

function cambiarLogo() {
    document.getElementById('logo').src = 'imagenes/logo2.png';
}

function cambiarFondo() {
    document.getElementById('menu').style.background = '#8a0000ff';
}

function cambiodeTexto() {
    document.getElementById('Subtitulo').textContent = "No cambies p";
}

function fondoAside() {
    document.getElementById('aside').style.background = '#009919ff';
}
