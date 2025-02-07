//guardar estado columna activa
let columnaActiva = 1;

//seleccionar columna
const columnas = document.querySelectorAll(".columna");

//Escuchar click en columnas
columnas.forEach((columna, indice) =>{
    columna.addEventListener("click", function(){

        isActive(indice)
    })
})

//cambiar estado

function isActive(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}