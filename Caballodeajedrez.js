let fila;
let columna;
let sfila;
let scolumna;

fila=parseInt(prompt("Ingrese coordenadas del caballo, comenzando por la fila"));
columna=parseInt(prompt("Ingrese la columna"));

if(fila>0 && fila<9 && columna>0 && columna<9){
    console.log("El caballo puede saltar de "+fila+','+columna+' a:')

    sfila=fila-2
    scolumna=columna-1
    if(sfila>0 && scolumna>0){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

    sfila=fila-2
    scolumna=columna+1
    if(sfila>0 && scolumna<9){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

    sfila=fila-1
    scolumna=columna-2
    if(sfila>0 && scolumna>0){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

    sfila=fila-1
    scolumna=columna+2
    if(sfila>0 && scolumna<9){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

    sfila=fila+1
    scolumna=columna-2
    if(sfila<9 && scolumna>0){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

    sfila=fila+1
    scolumna=columna+2
    if(sfila<9 && scolumna<9){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

    sfila=fila+2
    scolumna=columna-1
    if(sfila<9 && scolumna>0){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

    sfila=fila+2
    scolumna=columna+1
    if(sfila<9 && scolumna<9){
        console.log("fila:"+sfila+', columna:'+scolumna)
    }

}else{
    console.log("Posición invalida")
}