let contador;
let alternada = 1;
let limite =prompt("ingresa el numero de terminos de la suma")
let PI=0;
let a=1;

for (contador=1; contador <= limite; contador++){

    PI += alternada*(1/a);
    a= a+2
    alternada*=(-1)
}

PI*=4;
console.log(PI);
