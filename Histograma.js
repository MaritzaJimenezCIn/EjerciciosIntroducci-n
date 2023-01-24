let datoingresado;
let contadordepositivos=0;
let contadordenegativos=0;
let x;
let resultado;

do{
    datoingresado=parseInt(prompt("Ingrese varios valores, termine con 0"))
    console.log(datoingresado)
    if(datoingresado>0){
        contadordepositivos++
    }else if(datoingresado<0){
        contadordenegativos++
    }
}while(datoingresado!=0)

resultado="positivos:"
for(x=0; x<contadordepositivos;x++){
    resultado+="*"
}
console.log(resultado)

resultado="negativos:"
for(x=0; x<contadordenegativos;x++){
    resultado+="*"
}
console.log(resultado)