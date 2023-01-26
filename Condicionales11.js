let origen;
let destino;

origen=prompt("Ingrese su origen");
destino=prompt("Ingrese su destino");

if(origen=="Palma"){
    if(destino=="Barcelona"){
        document.write(`<h3>Su descuento es del 5% </h3>`)
    }if(destino=="Madrid"){
        document.write(`<h3>Su descuento es del 10% </h3>`)
    }if(destino=="Valencia"){
        document.write(`<h3>Su descuento es del 15% </h3>`)
    }
}
