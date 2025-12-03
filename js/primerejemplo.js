console.log("Hola Mundo");

function Avion() {
    document.getElementById('avion').src = 'imagenes/avion.jpg';
    alert("El avión ha cambiado");
}

function destruidoo() {
    document.getElementById('destruido').src = 'imagenes/destruido.png';
    alert("Imagen destruida cambiada");
}

function cambiarLogo() {
    document.getElementById('logo').src = 'imagenes/logo2.png';
}

function cambiarFondo() {
    document.getElementById('menu').style.background = '#8a0000ff';
}

function cambiodeTexto() {
    document.getElementById('Subtitulo').textContent = "Texto cambiado";
}

function fondoAside() {
    document.getElementById('aside').style.background = '#009919ff';
}
