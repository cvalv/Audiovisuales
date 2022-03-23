let partes=[
["img/Cabezar2d2.png",      "img/Cuerpor2d2.png",    "img/Piernasr2d2.png"],
["img/CabezaCarlos.png",    "img/cuerpoCarlos.png",  "img/patasCarlos.png"],
["img/cabezaRafa.png",      "img/cuerpoRafa.png",    "img/PatasRafa.png"],
["img/cabezaCarlos2.png",   "img/cuerpoCarlos2.png", "img/patasCarlos2.png"],
["img/cabezaCarlos3.png",   "img/cuerpoCarlos3.png", "img/patasCarlos3.png"]
];


let cabeza = "";
let cuerpo = "";
let piernas = "";
let azar0;
let azar1;
let azar2;
let robot;

/* Cabeza */

function anterior0(){
    if (cabeza == 0){
        cabeza = partes.length-1;
    }
    else{
        cabeza--;
    }
 document.getElementById("cabeza").src= partes[cabeza][0];
}
function siguiente0(){
    if (cabeza == partes.length-1){
        cabeza = 0;
    }
    else{
        cabeza++;
    }
 document.getElementById("cabeza").src= partes[cabeza][0];
}
/* Cuerpo */

function anterior1(){
    if (cuerpo == 0){
        cuerpo = partes.length-1;
    }
    else{
        cuerpo--;
    }
 document.getElementById("cuerpo").src= partes[cuerpo][1];
}
function siguiente1(){
    if (cuerpo == partes.length-1){
        cuerpo = 0;
    }
    else{
        cuerpo++;
    }
 document.getElementById("cuerpo").src= partes[cuerpo][1];
}
/* Piernas */

function anterior2(){
    if (piernas == 0){
        piernas = partes.length-1;
    }
    else{
        piernas--;
    }
 document.getElementById("piernas").src= partes[piernas][2];
}
function siguiente2(){
    if (piernas == partes.length-1){
        piernas = 0;
    }
    else{
        piernas++;
    }
 document.getElementById("piernas").src= partes[piernas][2];
}



function calculoAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function aleatorio(){
    azar0 = calculoAleatorio(0, partes.length);
    azar1 = calculoAleatorio(0, partes.length);
    azar2 = calculoAleatorio(0, partes.length);
    document.getElementById("cabeza").src= partes[azar0][0];
    document.getElementById("cuerpo").src= partes[azar1][1];
    document.getElementById("piernas").src= partes[azar2][2];
}

function entero(){
    robot = document.getElementById("roboces").value;
    document.getElementById("cabeza").src= partes[robot][0];
    document.getElementById("cuerpo").src= partes[robot][1];
    document.getElementById("piernas").src= partes[robot][2];
}

aleatorio();