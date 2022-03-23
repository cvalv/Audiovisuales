/* introducir datos */

var nombre= prompt("¿Cómo te llamas?");
var ano= prompt("¿En qué año naciste?");

var edad=2022-ano;

/* Relacionar el mes con el signo del zodiaco */

var signos=[
  "capricornio", 
  "acuario",
  "piscis",
  "aries",
  "tauro",
  "geminis",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "escorpio",
  "sagitario"
];

/* Imagen del signo */

var imgzod = [
  "https://i.pinimg.com/originals/98/ab/ae/98abae6d4b2d45897d70143bb52e9e1c.png",
  "https://i.pinimg.com/originals/da/0a/07/da0a07129c3edc7439799b4027bbb08c.png",
  "https://cdn-icons-png.flaticon.com/512/47/47255.png",
  "https://cdn.goodvinilos.com/20383/signo-aries.jpg",
  "https://cdn.goodvinilos.com/20396/signo-tauro.jpg",
  "https://www.viniloscasa.com/14813-thickbox/vinilo-decorativo-horoscopo-geminis.jpg",
  "https://cdn-icons-png.flaticon.com/512/47/47279.png",
  "https://i.pinimg.com/originals/97/4c/42/974c429386f52a04531ed6035ba4ea26.png",
  "https://cdn-icons-png.flaticon.com/512/47/47142.png",
  "https://cdn-icons-png.flaticon.com/512/47/47298.png",
  "https://cdn.goodvinilos.com/20474/signo-escorpio.jpg",
  "https://cdn.goodvinilos.com/20476/signo-sagitario.jpg"
];


function mselec(){
  
  var mes= document.getElementById("mes").value;
  var zodiaco= signos[mes];
  var imagenzod = imgzod[mes];
 
    document.getElementById("signo").innerHTML="Hola " + nombre + ", tienes " + edad +" años y tu signo es: <spam id='sub'>" + zodiaco + "</spam> <img id='titulo' src=" + imagenzod + ">";
}


/* rotar la imagen */


var incremento = 0;
function rotar(){
  
document.getElementById("imagen").style.transform = "rotate("+ (incremento) + "deg)";

incremento++;
}

setInterval(rotar, 80);

/* insertar imagen junto al nombre del signo */

