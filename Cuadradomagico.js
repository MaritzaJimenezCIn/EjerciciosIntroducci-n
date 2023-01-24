let tamaño;
let i;
let array1;
let n=0;
let fila1;
let r1;
let r2;
let nfila=1;
let n2;
let contador=0;
let comparar;
let comparar1;
let a=-1;
let array2;
let array3;
let suma=0;

tamaño=parseInt(prompt("Insertar el tamaño del cuadrado n"))
n2=tamaño*tamaño
array2=new Array(n2)
array3=new Array(tamaño)

for(let x=0; x<tamaño;x++){
    array1=new Array(tamaño)
    for(i=0;i<tamaño;i++){
        n=n+1
        fila1=parseInt(prompt("ingrese el dato "+n+' de la fila '+nfila));
        suma=suma+fila1
        if(fila1>n2){
            contador++
        }
        array1[i]=fila1
        a=a+1
        array2[a]=fila1
    } 
    r2=array1[0]
    for(i=1;i<tamaño;i++){
        r1=array1[i]
        r2= r2 +','+r1
}
console.log(r2)
nfila=nfila+1
n=0
array3[x]=suma
suma=0
}
for(x=0;x<n2;x++){
    for(let y=0;y<n2;y++){
        if(x!=y){
            if(array2[x]==array2[y]){
                contador++
        }
        }
    }
}
if(contador>0){
    console.log("El arreglo no tiene numeros consecutivos")
}else{
    console.log("El arreglo si tiene numeros consecutivos")
}
contador=0
let resultado=tamaño-1
for(x=0; x<resultado; x++){
    i=x+1
    if(array3[x]==array3[i]){
        contador++
    }
}
if(contador==resultado){
    console.log("El arreglo es un cuadro magico")
    console.log("Cada fila, columna y diagonal suma "+array3[0])
}else{
    console.log("El arreglo no es un cuadro magico")
}
