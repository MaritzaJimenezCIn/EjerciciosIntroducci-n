let num;
let x; 
let s1=0;
let s2;
let operación;

num=parseInt(prompt("Ingrese un numero"))

for (x=0; x <= num; x++){
    s1= s1+x
}
console.log("S1:" +s1)

operación=(num+1)*num
s2=operación/2
console.log("S2:" +s2)

if (s1 == s2){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}
