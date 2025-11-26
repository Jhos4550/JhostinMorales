console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert") 

function triste(){
    document.getElementById('carita').src='imagenes/trite.png';
    alert("Po que ta triste mano");
}
function feliz(){
    document.getElementById('carita').src='imagenes/feliz.png';
}
function cambiarColor(){
    document.getElementById('menu').style.color='#eed33aff';

}
function cambiarLogo(){
    document.getElementById('logo').src='imagenes/logo2.png';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#c2a502ff';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="No cambies p";
}
function fondoAside(){
    document.getElementById('aside').style.background='#00ffb3ff';
}
