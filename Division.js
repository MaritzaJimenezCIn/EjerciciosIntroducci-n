let dividendo;
let divisor;
let resto;

dividendo=parseInt(prompt("Ingrese el dividendo"));
divisor=parseInt(prompt("Ingrese el divisor"));

let resultado= dividendo/divisor;

if(dividendo%divisor==0){
    console.log("la division es exacta, cociente:"+resultado);
    resto=dividendo%divisor;
    console.log("resto:"+resto);
}else{
    resto=dividendo%divisor;
    let cociente=dividendo-resto;
    let cociente2=cociente/divisor;
    console.log("la division no es exacta, cociente:"+cociente2);
    console.log("resto:"+resto);
} 
