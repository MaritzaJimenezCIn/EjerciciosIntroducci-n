let n;
let digitos;
let x;
let r;
let v;
let comparar;
let contador=0;
let dato=0;
let promedio=0;


n=parseInt(prompt("Ingresa cuantos numero quieres leer"));
v=new Array(n)

for(let i=0; i<n; i++){
    digitos=parseFloat(prompt("Ingrese los datos"));
    dato=dato+1
    console.log("Dato "+dato +': ' +digitos);
    v[i]=digitos
}

for(let d=0; d<n; d++){
    comparar=v[d]
    promedio=promedio+comparar
}
promedio=promedio/n

for(let f=0; f<n; f++){
    comparar=v[f]
    if(comparar>promedio){
        contador++
    }
}

console.log(contador +' datos son mayores que el promedio')
