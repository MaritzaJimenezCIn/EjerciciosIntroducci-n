let n;
let digitos;
let x;
let r;
let v;
let comparar;
let contador=0;


n=parseInt(prompt("¿Cuantos datos ingresara?"));
v=new Array(n)

for(let i=0; i<n; i++){
    digitos=parseInt(prompt("Ingresa los numeros"));
    console.log(digitos);
    v[i]=digitos
}

x=parseInt(prompt("Ingresa el valor x con cual comparar"));

for(let d=0; d<n; d++){
    comparar=v[d]
    if(comparar>x){
        contador=contador+1
    }
}
console.log("De tu lista "+contador +' valores son mayores a '+x);