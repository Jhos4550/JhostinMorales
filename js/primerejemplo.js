console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert")

function avion() {
    document.getElementById('torres').src = 'imagenes/avion.jpg';
    alert("El avión que impactó en las torres.");
}

function destruido() {
    document.getElementById('torres').src = 'imagenes/destruido.jpg';
    alert("F bb");
}

function cambiarLogo() {
    document.getElementById('logo').src = 'imagenes/logo2.png';
    alert("Modo emo :,c");
}

function cambiarFondo() {
    document.getElementById('menu').style.background = '#07ff98ff';
    alert("Quiere mas color");
}

function cambiodeTexto() {
    document.getElementById('Subtitulo').textContent = "A ya, asi eres";
    alert("No cambies p >:,/ ");
}

function fondoAside() {
    document.getElementById('aside').style.background = '#093333ff';
    alert("Racista!!!");
}
function cambiarFondo2(){
     document.getElementById('header').style.background='#07ff98ff';
     alert("Mas colorido quiere ");
}
function cambiarFondo1(){
     document.getElementById('footer').style.background='#07ff98ff';
     alert("Te gusta el color. un poco mas completo en la inferior")
}
function cambiodeTextoo(){
    document.getElementById('tituloo').textContent="Java Script";
    alert("Ya, sin practica");
}
function subtitulo(){
    document.getElementById('subtitulo').textContent="Ejemplo";
    alert("Es muy obvio dices");
}