let imagenes = [
    "img/slide1.png",
    "img/slide2.png",
    "img/slide3.png"
];

let index = 0;

function cambiarImagen(){

    index++;

    if(index >= imagenes.length){
        index = 0;
    }

    document.getElementById("slider-img").src = imagenes[index];
}

setInterval(cambiarImagen,3000);

/* POPUP PRODUCTOS */

function mostrarInfo(titulo, descripcion){

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-titulo").innerText = titulo;

    document.getElementById("popup-texto").innerText = descripcion;
}

function cerrarPopup(){

    document.getElementById("popup").style.display = "none";
}