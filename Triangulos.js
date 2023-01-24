let a, b, c ;

a=parseFloat(prompt("Ingrese el primer lado del triangulo"));
b=parseFloat(prompt("Ingrese el segundo lado del triangulo"));
c=parseFloat(prompt("Ingrese el tercer lado del triangulo"));




if(a+b<c){
    console.log("El triangulo es invalido");
}else if(b+c<a){
    console.log("El triangulo es invalido");
}else if(c+a<b){
    console.log("El triangulo es invalido");
}else if(a==b){
    console.log("El triangulo es isosceles");
}else if(b==c){
    console.log("El triangulo es isosceles");
}else if(a==c){
    console.log("El triangulo es isosceles");
}else{
    console.log("El triangulo es escaleno");
}
