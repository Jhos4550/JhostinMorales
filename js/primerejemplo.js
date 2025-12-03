console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert") 

function avion(){
    document.getElementById('avion').src='imagenes/torres.jpg';
    alert("Este avion destryo a las torres gemelas") 
}
function torres(){
    document.getElementById('avion').src='imagenes/avion.jpg';
    alert("Aqui estan las torres aun intactas") 
} 
function destruido(){
    document.getElementById('destruido').src='imagenes/destruido.jpg';
    alert("Impacto el avion en las torres, pobres torres :,c") 
} 
function cambiarLogo(){
    document.getElementById('logo').src='imagenes/logo2.png';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#8a0000ff';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="No cambies p";
}
function fondoAside(){
    document.getElementById('aside').style.background='#009919ff';
}
