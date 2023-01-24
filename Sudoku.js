let f1=new Array(8)
let f2=new Array(8)
let f3=new Array(8)
let f4=new Array(8)
let f5=new Array(8)
let f6=new Array(8)
let f7=new Array(8)
let f8=new Array(8)
let f9=new Array(8)
let suma;
let contador=0;

let d1;
for(let a=0; a<9; a++){
    d1=parseInt(prompt("Ingrese los datos de la fila 1"))
    if(d1<1){
        contador++
    }
    if(d1>9){
        contador++
    }
    f1[a]=d1
}for(x=0; x<8; x++){
    let i=x+1
    if(f1[x]==f1[i]){
        contador++
    }}
console.log(f1[0]+', '+f1[1]+', '+f1[2]+', '+f1[3]+', '+f1[4]+', '+f1[5]+', '+f1[6]+', '+f1[7]+', '+f1[8])
let d2;
for(let a=0; a<9; a++){
    d2=parseInt(prompt("Ingrese los datos de la fila 2"))
    if(d2<1){
        contador++
    }
    if(d2>9){
        contador++
    }
    f2[a]=d2
}for(x=0; x<8; x++){
    let i=x+1
    if(f2[x]==f2[i]){
        contador++
    }}
console.log(f2[0]+', '+f2[1]+', '+f2[2]+', '+f2[3]+', '+f2[4]+', '+f2[5]+', '+f2[6]+', '+f2[7]+', '+f2[8])
let d3;
for(let a=0; a<9; a++){
    d3=parseInt(prompt("Ingrese los datos de la fila 3"))
    if(d3<1){
        contador++
    }
    if(d3>9){
        contador++
    }
    f3[a]=d3
}for(x=0; x<8; x++){
    let i=x+1
    if(f3[x]==f3[i]){
        contador++
    }}
console.log(f3[0]+', '+f3[1]+', '+f3[2]+', '+f3[3]+', '+f3[4]+', '+f3[5]+', '+f3[6]+', '+f3[7]+', '+f3[8])
let d4;
for(let a=0; a<9; a++){
    d4=parseInt(prompt("Ingrese los datos de la fila 4"))
    if(d4<1){
        contador++
    }
    if(d4>9){
        contador++
    }
    f4[a]=d4
}for(x=0; x<8; x++){
    let i=x+1
    if(f4[x]==f4[i]){
        contador++
    }}
console.log(f4[0]+', '+f4[1]+', '+f4[2]+', '+f4[3]+', '+f4[4]+', '+f4[5]+', '+f4[6]+', '+f4[7]+', '+f4[8])
let d5;
for(let a=0; a<9; a++){
    d5=parseInt(prompt("Ingrese los datos de la fila 5"))
    if(d5<1){
        contador++
    }
    if(d5>9){
        contador++
    }
    f5[a]=d5
}for(x=0; x<8; x++){
    let i=x+1
    if(f5[x]==f5[i]){
        contador++
    }}
console.log(f5[0]+', '+f5[1]+', '+f5[2]+', '+f5[3]+', '+f5[4]+', '+f5[5]+', '+f5[6]+', '+f5[7]+', '+f5[8])
let d6;
for(let a=0; a<9; a++){
    d6=parseInt(prompt("Ingrese los datos de la fila 6"))
    if(d6<1){
        contador++
    }
    if(d6>9){
        contador++
    }
    f6[a]=d6
}for(x=0; x<8; x++){
    let i=x+1
    if(f6[x]==f6[i]){
        contador++
    }}
console.log(f6[0]+', '+f6[1]+', '+f6[2]+', '+f6[3]+', '+f6[4]+', '+f6[5]+', '+f6[6]+', '+f6[7]+', '+f6[8])
let d7;
for(let a=0; a<9; a++){
    d7=parseInt(prompt("Ingrese los datos de la fila 7"))
    if(d7<1){
        contador++
    }
    if(d7>9){
        contador++
    }
    f7[a]=d7
}for(x=0; x<8; x++){
    let i=x+1
    if(f7[x]==f7[i]){
        contador++
    }}
console.log(f7[0]+', '+f7[1]+', '+f7[2]+', '+f7[3]+', '+f7[4]+', '+f7[5]+', '+f7[6]+', '+f7[7]+', '+f7[8])
let d8;
for(let a=0; a<9; a++){
    d8=parseInt(prompt("Ingrese los datos de la fila 8"))
    if(d8<1){
        contador++
    }
    if(d8>9){
        contador++
    }
    f8[a]=d8
}for(x=0; x<8; x++){
    let i=x+1
    if(f8[x]==f8[i]){
        contador++
    }}
console.log(f8[0]+', '+f8[1]+', '+f8[2]+', '+f8[3]+', '+f8[4]+', '+f8[5]+', '+f8[6]+', '+f8[7]+', '+f8[8])
let d9;
for(let a=0; a<9; a++){
    d9=parseInt(prompt("Ingrese los datos de la fila 9"))
    if(d9<1){
        contador++
    }
    if(d9>9){
        contador++
    }
    f9[a]=d9
}for(x=0; x<8; x++){
    let i=x+1
    if(f9[x]==f9[i]){
        contador++
    }}
console.log(f9[0]+', '+f9[1]+', '+f9[2]+', '+f9[3]+', '+f9[4]+', '+f9[5]+', '+f9[6]+', '+f9[7]+', '+f9[8])
for(x=0; x<9; x++){
    suma=f1[x]+f2[x]+f3[x]+f4[x]+f5[x]+f6[x]+f7[x]+f8[x]+f9[x]
    if(suma!=45){
        contador++
    }
    suma=0
}
if(contador>0){
    console.log("El arreglo leido no es la solución correcta")
}else{
    console.log("El arreglo leido es la solución correcta")
}

