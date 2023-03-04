// playlist
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

const $ = (selector) => document.querySelector(selector)

// playlist = alert ("Ingresa tus 5 canciones favoritas")
// const firstSong = prompt ("Ingresa canción nro 1:")
// const secondSong = prompt ("Ingresa canción nro 2:")
// const thridSong = prompt ("Ingresa canción nro 3:")
// const fourthSong = prompt ("Ingresa canción nro 4:")
// const fifthSong = prompt ("Ingresa canción nro 5:")

// $(".primer_tema").innerText += firstSong
// $(".seg_tema").innerText += secondSong
// $(".ter_tema").innerText += thridSong
// $(".cuarto_tema").innerText += fourthSong
// $(".quinto_tema").innerText += fifthSong

// contador
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

let contador = 0 
const menosUno = () => --contador
const masUno = () => ++contador
const menosCinco = () => (contador-=5);


$("#numero").innerText = contador

$("#menos_uno").addEventListener("click", () => {
    if (contador > 0) {
    menosUno ()
    $("#numero").innerText = contador
    }
})

$("#mas_uno").addEventListener("click", () => {
    masUno ()
    $("#numero").innerText = contador
})

$("#menos_cinco").addEventListener("click", () => {
    menosCinco ()
    $("#numero").innerText = contador
})