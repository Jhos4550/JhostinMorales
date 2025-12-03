console.log("Hola Mundo");

function torres() {
    document.getElementById('avion').src = 'imagenes/avion.jpg';
    alert("Este avión ha destruido a las torres gemelas");
}

function destruido() { 
    document.getElementById('destruido').src ='imagenes/destruido.png';
    alert("F bb");
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
