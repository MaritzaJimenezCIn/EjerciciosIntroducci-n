let num;
let residuo;
let numinverso=0;
let total=0;
let secuencia=2;

num=parseInt(prompt("Ingrese un rol sin guion ni digito verificador"));

while(num!=0){
    residuo=num%10
    numinverso=numinverso*10+residuo;
    total=total+(residuo*secuencia)
    if(secuencia==7){
        secuencia=2
    }else{
        secuencia=secuencia+1
    }
    num=parseInt(num/10)

}
total=total%11
total=11-total
console.log("El digito verificador es:" +total)
console.log(+numinverso+'-'+total)