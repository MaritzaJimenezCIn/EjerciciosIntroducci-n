alert("Ingresaras el nombre de los equipos de cuartos de final");
console.log("Cuartos de final:")
let equipo1=(prompt("Nombre del equipo 1"));
let equipo2=(prompt("Nombre del equipo 2"));
console.log(equipo1+' vs '+equipo2);
let equipo3=(prompt("Nombre del equipo 3"));
let equipo4=(prompt("Nombre del equipo 4"));
console.log(equipo3+' vs '+equipo4);
let equipo5=(prompt("Nombre del equipo 5"));
let equipo6=(prompt("Nombre del equipo 6"));
console.log(equipo5+' vs '+equipo6);
let equipo7=(prompt("Nombre del equipo 7"));
let equipo8=(prompt("Nombre del equipo 8"));
console.log(equipo7+' vs '+equipo8);
console.log(" ")

alert("Ingresa los resultados de los cuartos de final");

let a;
let b;
let c;
let d;

let g1=parseInt(prompt(equipo1))
let g2=parseInt(prompt(equipo2))
if(g1>g2){
    a=equipo1
}if(g2>g1){
    a=equipo2
}
let g3=parseInt(prompt(equipo3))
let g4=parseInt(prompt(equipo4))
if(g3>g4){
    b=equipo3
}if(g4>g3){
    b=equipo4
}
let g5=parseInt(prompt(equipo5))
let g6=parseInt(prompt(equipo6))
if(g5>g6){
    c=equipo5
}if(g6>g5){
    c=equipo6
}
let g7=parseInt(prompt(equipo7))
let g8=parseInt(prompt(equipo8))
if(g7>g8){
    d=equipo7
}if(g8>g7){
    d=equipo8
}

console.log("Semifinales:")
console.log(a+' vs '+b);
console.log(c+' vs '+d);
console.log(" ")

alert("Ingresa los resultados de las semifinales");
g1=parseInt(prompt(a))
g2=parseInt(prompt(b))
if(g1>g2){
    a=a
}if(g2>g1){
    a=b
}
g3=parseInt(prompt(c))
g4=parseInt(prompt(d))
if(g3>g4){
    b=c
}if(g4>g3){
    b=d
}

console.log("Final:")
console.log(a+' vs '+b);
console.log(" ")

alert("Ingresa los resultados de la final");
g1=parseInt(prompt(a))
g2=parseInt(prompt(b))
if(g1>g2){
    a=a
}if(g2>g1){
    a=b
}
console.log("El ganador de la copa del mundo es:")
console.log(a)