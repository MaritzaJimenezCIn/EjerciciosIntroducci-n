let catetoa;
let catetob;

catetoa=parseFloat(prompt("Ingrese el cateto a"));
catetob=parseFloat(prompt("Ingrese el cateto b"));

let a = catetoa * catetoa;
let b = catetob * catetob;

let hipotenusa = a + b;


let resultado = Math.sqrt(hipotenusa);

console.log("la hipotenusa es:"+resultado);
