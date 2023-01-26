let edad;

edad=parseInt(prompt("Ingrese su edad"));

if(edad<1){
    alert("La edad que ingreso no esta permitida")
}if(edad>120){
    alert("La edad que ingreso no esta permitida")
}if((edad>=18)&&(edad<=120)){
    document.write(`<h3> Sí tiene permiso de acceso</h3>`)
}