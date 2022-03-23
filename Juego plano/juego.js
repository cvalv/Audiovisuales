/* variables */

var plano = [
    "Plano general",
    "Plano panoramico",
    "Gran plano general",
    "Plano americano",
    "Primer plano",
    "Gran primer plano",
    "Medio plano",
    "Nadir",
    "Cenital",
    "Picado",
    "Contrapicado"
]; // guarda las imagenes


var aleatorio = -1; // contador de imagen aleatoria u orden natural
var foto; // variable que guarda la imagen a mostrar
var puntikos = 0; // puntos que se van ganando
var preguntas = 0; // contador de por que pregunta va
/* var total = 11; // preguntas totales */
var final = false; // variable ara finalizar el juego

/* Muestra en antalla el boton iniciar y oculta el contenido del juego y el botón seleccionar imagen por defecto */

document.getElementById("selecimg").style.display = "none";
document.getElementById("iniciar").style.display = "inline-block";
document.getElementById("contenido").style.display = "none";

/* Iniciar juego */

function start(){
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("oculto").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    imgrandom();
}

/* funcion para sacar las imagenes aleatoriamente */

/* function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} */

/* Comprueba si estamos en el final del juego */

function imgrandom() {


    if (!final) {

        /* "aleaotrio" cogía un numero al azar // aleatorio suma 1 // peguntas suma 1 // foto recoge el valor de plano // muestra en pantalla la foto, el texto y la puntuacion y el número de preguntas  */

        /* aleatorio = getRandomInt(0, plano.length); */

        aleatorio++;
        preguntas++;
        foto = plano[aleatorio];
        document.getElementById("imagen").src = "img/" + foto + ".jpg";
        document.getElementById("contestacion").innerHTML = "Good luck!";
        document.getElementById("puntos").innerText = "Tu puntuación es: " + puntikos + " / " + preguntas;


    } else {

        /* Reinicia los contadores del juego */

        puntikos = 0;
        preguntas = 1;
        aleatorio = 0;
        final = false;
        foto = plano[aleatorio];
        document.getElementById("puntos").innerText = "Tu puntuación es: " + puntikos + " / " + preguntas;
        document.getElementById("imagen").src = "img/" + foto + ".jpg";
    }


    /* Elimina un elemento de la array plano */

    /* plano.splice(aleatorio, 1);
    console.log(plano); */

    /* Muestra en consola los valores de las variables aleatorio y preguntas */
    console.log("aleatorio= " + aleatorio);
    console.log("preguntas= " + preguntas);


    /* Cambiar entre botones de comprobar y siguiente */
    
    document.getElementById("comprobar").style.display = "inline-block";
    document.getElementById("selecimg").style.display = "none";




}

/* Comprueba si hemos acertado la pregunta */

function comprobar() {
    /* Saber que ha seleccionado y escribirlo en pantalla con la respuesta correcta */
    let seleccionado = document.getElementById('respuesta').value;
    document.getElementById("contestacion").innerHTML = "Has seleccionado: " + plano[seleccionado] + " y la respueta correcta es: " + foto;


    /* Cambiar entre botones de comprobar y siguiente */
    document.getElementById("comprobar").style.display = "none";
    document.getElementById("selecimg").style.display = "inline-block";

    /* sumar y mostrar puntos y el número de preguntas */
    var eleccion = document.getElementById("respuesta").value;


    if (eleccion == aleatorio) {
        puntikos++;
    }

    document.getElementById("puntos").innerText = "Tu puntuación es: " + puntikos + " / " + preguntas;


    /* Finalización del juego */
    if (preguntas == plano.length) {

        if (puntikos >= (preguntas / 2)) {
            document.getElementById("puntos").innerText = "Enhorabuena!! Tu puntuación es: " + puntikos;
        } else {
            document.getElementById("puntos").innerText = "OH!! NO!! Tu puntuación es: " + puntikos + " Hay que ver más peliculas";
        }
        final = true;
    }
}

/* Muestra en pantalla la puntuación, el número de preguntas y la imagen. */

document.getElementById("puntos").innerText = "Tu puntuación es: " + puntikos + " / " + preguntas;

