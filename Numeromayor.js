let n;
let i;
let num;
let nummayor;

n=parseInt(prompt("Ingrese n"))

for(i=1; i<=n;i++){
    num=parseInt(prompt("Ingrese número"))
    if (i==1){
        nummayor=num
    }else{
        if (num>nummayor){
            nummayor=num
        }
    }

}
console.log("El mayor es:" +nummayor)