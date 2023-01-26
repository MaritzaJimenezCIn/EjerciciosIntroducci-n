let mes;

mes=parseInt(prompt("Ingresa el numero de mes"));

if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12){
    document.write(`<h3>Este mes tiene 31 días</h3>`)
}if(mes==2){
    document.write(`<h3>Este mes tiene menos de 30 días</h3>`)
}if(mes==4||mes==6||mes==9||mes==11){
    document.write(`<h3>Este mes tiene 30 días</h3>`)
}