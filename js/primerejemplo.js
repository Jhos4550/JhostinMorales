console.log("Hola Mundo");

function Avion() {
    document.getElementById('avion').src = 'imagenes/avion.jpg';
    alert("El avion q impacto en la torres gemelas");
}

function destruidoo() {
    document.getElementById('destruido').src = 'imagenes/destruido.png';
    alert("F bb");
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
