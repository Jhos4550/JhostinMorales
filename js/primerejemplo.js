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
    document.getElementById('menu').style.background = '#2cff8bff';
    alert("Mas colorido quiere la wawa") 
}

function cambiodeTexto() {
    document.getElementById('Subtitulo').textContent = "Texto cambiado correctamente";
}

function fondoAside() {
    document.getElementById('aside').style.background = '#038d97ff';
    alert("A, pero el aside mas apagado") 
}
