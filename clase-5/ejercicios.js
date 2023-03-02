// EJ 1 Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// const puedeVerPelicula = (edad , tieneAutorizacion) => {
//     if (edad >= 15 || tieneAutorizacion){
//         return "Sí puede ver"
//     }
//     else {
//         return "No podes ver la película"
//     }
// }

//EJ 2 Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// const estaEnRango = (valor, minimo, maximo) =>{
//     if (valor > minimo && valor < maximo){
//         return "true"
//     } else {
//         return "false"
//     }
// }

//EJ 3 Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// const puedeAvanzar = (color) => {
//     if (color === "verde") {
//         return "True" 
//     } else if (color === "amarillo" || color === "rojo") {
//         return "False"
//     } else {
//         return "Error: color de semáforo     inválido"
//     }
// }

//EJ 4 Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

// const esVocal = (letra) => {
//     if (letra ==="a" || letra ==="e" ||letra ==="i" ||letra ==="o" ||letra ==="u") {
//         return "true"
//     } else {
//         return "false"
//     }
// }

// EJ 5 Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// const esConsonante = (letra) => {
//     if (letra ==="a" || letra ==="e" ||letra ==="i" ||letra ==="o" ||letra ==="u") {
//         return "false"
//     } else {
//         return "true"
//     }
// }


//EJ 6 Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no 

// const esHoraValida = (hora) => {
//     const hh = parseInt(hora.slice(0,2))
//     const mm = parseInt(hora.slice(3,5))
//     return hh >=0 && hh <=23 && mm >=0 && mm <=59 
// }


// EJ 7 Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuesto) =>{
//     if ( tieneMultasImpagas == false && pasoTests && pagoImpuesto) {
//         return "true"
//     } else {
//         return "false"
//     }
// }

// EJ 8 Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

// const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
//     if ( asistencia >= 75 && materiasAprobadas >=50 && tesisAprobada) {
//         return "true"
//     } else {
//         return "false"
//     }
// }