let duracion=1;
let a=0;
let b;
let c;
let c0;
let c1;
let d;
while(duracion>0){
    duracion=parseInt(prompt("Ingrese el tramo"));
    a= a + duracion
}  
b= a/60
c= b%1
c1= c*60
c0= Math.round(c1)
d= b - c
console.log("Tiempo total del viaje es " +d+':'+c0 +" horas" )
