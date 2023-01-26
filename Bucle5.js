let fila;
let columna = parseInt(prompt("Introduce el tamaño: ", "0"))

for (fila = 1; fila <= columna; fila++){

    for (espacios = columna - fila; espacios > 0; espacios--)
        document.write("&nbsp&nbsp");
        
    
    for (conta = 1; conta < (2 * fila); conta++)
        document.write("*");
        document.writeln("</br>");
    
}

for (fila=columna-1 ; fila > 0; fila--){

    for (espacios = columna - fila; espacios > 0; espacios--)
        document.write("&nbsp&nbsp");
        
    
    for (conta = 1; conta < (2 * fila); conta++)
        document.write("*");
        document.writeln("</br>");
    
}

