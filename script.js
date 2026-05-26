let imagenes = [
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg"
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