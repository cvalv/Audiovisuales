var img=[
    "galeria-perrinos/boyeroBerna.jpg",
"galeria-perrinos/husky.jpg",
"galeria-perrinos/patascortas.jpg",
"galeria-perrinos/perrocalvo.jpg",
"galeria-perrinos/rotwailler.jpg"
]

var contador=1;

function siguiente(){
document.getElementById('foto').src=img[contador];
contador += 1;
if (contador > img.length -1 ) {contador=0}
console.log(contador); 
console.log(img[contador]);
}