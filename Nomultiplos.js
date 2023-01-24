let num;
let resto1;
let resto2;

num=parseInt(prompt("Ingrese un numero"))

for(let x=1; x <= num; x++ ){
    resto1= x%3;
    resto2= x%7;
    if (resto1 != 0){
        if (resto2 != 0){
            console.log(x)
        }
    }

}