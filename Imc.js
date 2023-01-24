let estatura;
let peso;
let edad;

estatura=parseFloat(prompt("Ingrese su estatura en metros"));
peso=parseFloat(prompt("Ingrese su peso en kilos"));
edad=parseInt(prompt("Ingrese su edad"));

let estatura2 = estatura * estatura;
let imc = peso/estatura2;

if (edad < 45) {
    if (imc < 22) {
        console.log("Su condicion de riesgo es baja");
    }else{
        console.log("Su condicion de riesgo es media");
}}else{
    if (imc < 22) {
        console.log("Su condicion de riesgo es media");
    }else{
        console.log("Su condicion de riesgo es alta");
}}