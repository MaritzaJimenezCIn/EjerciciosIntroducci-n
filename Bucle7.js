let numero1;
let numero2;
let x;
let m=1;
let multiplicacion;
alert("A continuacion ingresara 2 numeros del 1 al 10")
numero1=parseInt(prompt("Ingrese el primer numero"));
numero2=parseInt(prompt("Ingrese el segundo numero"));

document.write( "<table border='1'>");

for(x=numero2;x>0;x--){
    
    multiplicacion=numero1*m
    document.write("<tr>");
    document.write("<td>"+numero1+'x'+m+"</td>")
    document.write("<td>"+'='+"</td>")
    document.write("<td>"+multiplicacion+"</td>")
    document.write("</tr>");
    m=m+1
}
document.write("</table>");