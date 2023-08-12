// ejercicio 1
// let dia = prompt("Como esta el dia hoy?")
// console.log("El dia de hoy esta " + dia)

// ejercicio 2
// let num = prompt("indicar el radio")
// function area(radio) {
//     return Math.PI * radio ** 2
// }
// function perimetro(radio) {
//     return 2 * Math.PI * radio
// }
// console.log("El Area es: " + area(num))
// console.log("El perimetro es: " + perimetro(num))

// ejercicio 3
// let edad = prompt("indique su edad")
// if (edad >= 18) {
//     console.log("Ud es mayor, no vote a los KKs")
// } else {
//     console.log("Es menor, no haga cagadas")
// }

// ejercicio 4
// let letra = prompt("Ingrese una letra, solo puede ser N o S");
// letra = letra.toUpperCase()
// console.log(letra)
// if (letra == "N" || letra == "S") {
//     console.log("CORRECTO!")
// } else {
//     console.log("INCORRECTO")
// }

// ejercicio 5
// let opcion = prompt(`Elegir la operacion:
//     suma = s/S
//     resta = r/R
//     division = d/D
//     multiplicacion = m/M`)
// opcion = opcion.toLowerCase()

// let num = prompt("primer numero")
// let num2 = prompt("segundo numero")
// switch (opcion) {
//     case "s":
//         console.log("La suma es: " + (num + num2));
//         break;
//     case "r":
//         console.log("La resta es: " + (num - num2))
//         break;
//     case "m":
//         console.log("La multiplicacion es: " + (num * num2))
//         break;
//     case "d":
//         console.log("La division es: " + (num / num2))
//         break;
// }

// ejercicio 6
// let opcion = prompt("ingrese un numero")
// if (opcion == 0) {
//     console.log("el numero no es par ni impar")
// } else if (opcion % 2 == 0) {
//     console.log("el numero es par")
// } else {
//     console.log("el numero es impar")
// }

// ejercicio 7
// let limite = prompt("ingrese el limite a llegar")
// let num = 0
// do {

//     let opcion = prompt("ingrese un numero")
//     opcion = parseInt(opcion)
//     num = num + opcion
//     console.log(num)
// } while (num < limite)
// console.log("Se alcanzo el numero limite, sumando: " + num)


// ejercicio 8
// let contador = 0
// let suma = 0
// let max = 0
// let min = Number.MAX_VALUE
// let num = 0;

// do {
//     num = prompt("Ingrese un numero")

//     num = parseInt(num)

//     if (num != 0) {

//         if (num > max) {
//             max = num
//         }

//         if (num < min) {
//             min = num
//         }

//         contador += 1
//         suma += num

//     }

// } while (num != "0");

// console.log("minimo " + min)
// console.log("maximo " + max)
// console.log("contador " + contador)
// console.log("El promedio total es: " + (suma / contador))

// ejercicio 9
// let palabra = prompt("Ingrese una palabra")
// let resultado = ""
// for (let i = 0; i < palabra.length; i++) {
//     resultado += palabra.substring(i, (i + 1)) + " "
// }
// console.log(resultado)

// ejercicio 10
// let palabra = prompt("Ingrese una palabra")
// let resultado = ""
// for (let i = palabra.length - 1; i >= 0; i--) {
//     resultado += palabra.substring(i, i + 1)
// }
// console.log(resultado)

//ejercicio 10.1
// let palabra = prompt("Ingrese una palabra")
// palabra = palabra.split("").reverse()
// palabra = palabra.toString()
// console.log(palabra)


// ejercicio 11
// function sacarPalabra(palabra) {
//     let nuevo = palabra.split(" ")
//     let palabraLarga = ""

//     for (const aux of nuevo) {
//         if (palabraLarga.length < aux.length) {
//             palabraLarga = aux
//         }
//     }

//     return palabraLarga
// }

// ejercicio 12

// function tipo(variable) {
//     console.log(typeof (variable))
// }

// let lista = [1, true, "mario"]

// function imprimirTipo(array) {
//     array.forEach(elemento => { console.log(typeof (elemento)) })
// }

//ejercicio 13

// let lista = [
//     { "nombre": "mario", "edad": 30, "sexo": "H", "peso": 89, "altura": 1.80 },
//     { "nombre": "melisa", "edad": 43, "sexo": "M", "peso": 60, "altura": 1.60 },
//     { "nombre": "roberto", "edad": 61, "sexo": "O", "peso": 127, "altura": 1.97 }
// ]

//ejercicio 14
// function libro(isbn, titulo, autor, paginas) {
//     this.isbn = isbn
//     this.titulo = titulo
//     this.autor = autor
//     this.paginas = paginas
// }

// function crearLibro() {
//     let isbn = prompt("numero ISBN")
//     let titulo = prompt("titulo del libro")
//     let autor = prompt("autor del libro")
//     let paginas = prompt("numero de paginas")
//     let nuevoLibro = new libro(isbn, titulo, autor, paginas)
//     return nuevoLibro
// }

// let libro1 = crearLibro() //esto puede ir en la consola

//ejercicio 15
// function calcularArea(radio) {
//     return Math.PI * radio ** 2
// }
// function perimetro(radio) {
//     return 2 * Math.PI * radio
// }

// let num = prompt("indicar el radio")

// console.log(`El radio es ${calcularArea(num)} y el perimetro es ${perimetro(num)}. Gracias! vuelva prontos`)

//ejercicio 16
// const array1 = new Array
// var array2 = new Array
// function rellenarVectores() {
//     for (let i = 0; i < 5; i++) {
//         array1[i] = Math.floor(Math.random() * 101)
//         array2[i] = Math.floor(Math.random() * 101)
//     }
//     console.log(array1)
//     console.log(array2)
// }

//ejercicio 17 realizar un programa que elimine los dos ultimos elementos de un array
// var array1 = [1, 2, 3, 4, 5, 6, 7, 8]
// var contador = 1
// function borrarDos(array) {
//     do {
//         array.pop()
//         contador++
//     } while (contador <= 2);
//     console.log(array)
// }

//ejercicio 18
// var array1 = [true, 5, false, "hola", "adios", 2]
// var palabraLarga = ""
// var num1
// var num2
// console.log(array1)

// function operaciones(a, b) {
//     let suma = a + b
//     let resta = a - b
//     let multiplicacion = a * b
//     let division = a / b
//     let potencia = a ** b
//     console.log(`Dados los numeros ${a} y ${b}, el resultado de la suma es ${suma}, el resultado de la resta es ${resta},
//     el resultado de la multiplicacion es ${multiplicacion}, el resultado de la division
//     es ${division} y el resultado de la potencia es ${potencia}. Y la palabra mas larga es ${palabraLarga}`)
// }

// function cambio(array) {
//     var nuevoArray = array.map(aux => {
//         if (typeof (aux) == `number`) {
//             if (num1 == undefined) {
//                 num1 = aux
//             } else {
//                 num2 = aux
//             }

//         }
//         if (typeof (aux) == `boolean`) {
//             return !aux
//         }
//         if (typeof (aux) == `string`) {
//             if (palabraLarga.length < aux.length) {
//                 palabraLarga = aux
//             }
//         }
//         return aux
//     });
//     operaciones(num1, num2)
//     return nuevoArray
// }


//ejercicio 19
// var listaCincuenta = new Array
// var listaVeinte = new Array

// for (let i = 0; i < 50; i++) {
//     listaCincuenta[i] = Math.floor(Math.random() * 101);

// }

// function ejercicio(array, array2) {
//     for (let i = 0; i < 20; i++) {
//         if (i < 10) {
//             array2[i] = array[i];
//         } else {
//             array2[i] = 0.5;
//         }
//     }
//     array.sort()
//     console.log(array)
//     console.log(array2)
// }

//ejercicio 20
// var arra = [1, 2, 3, 4, 5]
// var arra2 = arra.map(function (x) {
//     return Array.of(x * 3)
// });
// arra2 = arra2.flat().map(function (x) {
//     return (x + 3)
// });

//ejercicio 22
function tocar() {
    alert("Toqueton! ;)")
}
document.getElementById("tocar").onclick = tocar;

//ejercicio 23
var parrafo = document.getElementById("parrafo")
var contenido = parrafo.innerText;
const original = contenido
var texto = contenido.split(" ")
function cambiar() {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].length >= 7) {
            texto[i] = "<mark>" + texto[i] + "</mark>"
        }
    }
    var cambiado = texto.join(" ")
    parrafo.innerHTML = cambiado
}

function volverAtras() {
    parrafo.innerHTML = original
}

document.getElementById("cambiar").onclick = cambiar;

document.getElementById("volverAtras").onclick = volverAtras;

//ejercicio 24


function calcularArea() {
    var num = parseInt(document.getElementById("valor").value)
    respuestaArea = Math.PI * num ** 2
    var texto = document.createTextNode("El Area de " + num + " es: " + respuestaArea)
    responder("respuestaArea", texto)

}
function perimetro() {
    var num = parseInt(document.getElementById("valor").value)
    respuestaPerimetro = 2 * Math.PI * num
    var texto = document.createTextNode("El perimetro de " + num + " es: " + respuestaPerimetro)
    responder("respuestaPerimetro", texto)
}

function calcularRadio() {
    let num = parseInt(document.getElementById("valor").value)
    let radio = num / 2
    let texto = document.createTextNode("El radio de " + num + " es: " + radio)

    responder("respuestaRadio", texto)

}

function responder(id, respuesta) {
    let padre = document.getElementById(id)
    if (padre.firstChild) {
        padre.removeChild(padre.firstChild)
    }
    var elemento = document.createElement("p")
    elemento.appendChild(respuesta)
    padre.appendChild(elemento)

}


document.getElementById("calcularRadio").onclick = calcularRadio;

document.getElementById("calcularPerimetro").onclick = perimetro;

document.getElementById("calcularArea").onclick = calcularArea;

// ejercicio 25
function getFormValores() {
    var form = document.getElementById("form1")
    var nombre = form.elements["nombre"]
    var apellido = form.elements["apellido"]
    var nombreValor = nombre.value
    var apellidoValor = apellido.value
    var texto = document.createTextNode("Hola " + nombreValor + " " + apellidoValor)
    responder("respuestaNombres", texto)
}















// const aplication = document.querySelector(`.container`)

// fetch('https://jsonplaceholder.typicode.com/photos', {
//     method: 'GET',
// })
//     .then(response => response.json())
//     .then(info => {
//         info.forEach(usuario => {
//             const p = document.createElement('p')
//             p.href = usuario.url
//             p.textContent = usuario.id
//             // p.innerHTML = '<a href=' + usuario.url + '></a>'
//             // console.log(usuario.url)
//             aplication.appendChild(p)
//         });


//     })
//     .catch(err => console.log(err))

//     const div = document.createElement("div");
//     div.classList.add("pokemon");
//     div.innerHTML = `
//         <p class="pokemon-id-back">#${pokeId}</p>
//         <div class="pokemon-imagen">
//             <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
//         </div>
//         <div class="pokemon-info">
//             <div class="nombre-contenedor">
//                 <p class="pokemon-id">#${pokeId}</p>
//                 <h2 class="pokemon-nombre">${poke.name}</h2>
//             </div>
//             <div class="pokemon-tipos">
//                 ${tipos}
//             </div>
//             <div class="pokemon-stats">
//                 <p class="stat">${poke.height}m</p>
//                 <p class="stat">${poke.weight}kg</p>
//             </div>
//         </div>
//     `;