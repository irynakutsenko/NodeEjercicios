//---------01 ejercicio
console.log("hola mundo");
//---------02 ejercicio
var nombre = "Iryna";
console.log("Hola " + nombre);
//----------03 ejercicio
const exactMath = require('exact-math');
var suma = exactMath.add(789, 34, 250443);
var subtraction = exactMath.sub(2059, 79);
var multiplication = exactMath.mul(3.24, 97.856);
var division = exactMath.div(1205, 12.002);
console.log("Suma = " + suma);
console.log("Subtraction " + subtraction);
console.log("Multiplication " + multiplication);
console.log("Division " + division);
//-----------04 ejercicio
var num1 = 14;
var num2 = 22;

function menor(num1, num2) {
    if (num1 > num2) {
        console.log(num2);
    } else {
        console.log(num1);
    }
}
console.log(menor(num1, num2));
//-----------05 ejercicio
let operation = require("../miNombre")
console.log(operation.string);
//-----------06 ejercicio 
let stringLongitud = require("../stringLongitud")
console.log(stringLongitud.stringLongitud("Peio"));
//-----------07 ejercicio 
let numAleFinal = require("../numeroAleatorio")
let arrFinal = require("../valores")

console.log(numAleFinal.getRandomInt(10));
console.log(arrFinal.createArray(27));
//-----------08 ejercicio
let valor = require("../app/propiedad")
console.log(valor.propiedad.boolean);
console.log(valor.propiedad.object.c);
//-----------09 ejercicio
let resultadoPar = require("../app/esPar");
console.log(resultadoPar.esPar(10));
//-----------10 ejercicio
let muestra = require("../app/muestra");
let arrayFinal = [1, 2, 89, 47, 89];
muestra.getNumArray(arrayFinal);
let segundamuestra = require("../app/segundamuestra");
segundamuestra.getNumArray(arrayFinal);