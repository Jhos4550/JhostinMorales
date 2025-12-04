console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert") 

function avion() {
    document.getElementById('avion').src = 'imagenes/avion.jpg';
    alert("El avión que impactó en las torres :,v");
}

function destruido() {
    document.getElementById('torres').src = 'imagenes/destruido.jpg';
    alert("F bb");
}

function cambiarLogo() {
    document.getElementById('logo').src = 'imagenes/logo2.png';
    alert("Modo emo :,c") 
}

function cambiarFondo() {
    document.getElementById('menu').style.background = '#8a0000ff';
}

function cambiodeTexto() {
    document.getElementById('Subtitulo').textContent = "Texto cambiado correctamente";
}

function fondoAside() {
    document.getElementById('aside').style.background = '#009919ff';
}
