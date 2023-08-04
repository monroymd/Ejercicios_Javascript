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


