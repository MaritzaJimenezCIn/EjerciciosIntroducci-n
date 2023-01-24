let va;
let a;
let vb;
let b;
let pi;

a=new Array(3)

for(let i=0; i<3; i++){
    va=parseInt(prompt("Ingrese el vector a"))
    a[i]=va
}
console.log('a: [' +a[0] +', ' +a[1] +', ' +a[2] +']')

b=new Array(3)
for(let i=0; i<3; i++){
    vb=parseInt(prompt("Ingrese el vector b"))
    b[i]=vb
}
console.log('b: [' +b[0] +', ' +b[1] +', ' +b[2] +']')

pi=(a[0]*b[0])+(a[1]*b[1])+(a[2]*b[2])

console.log("Producto interno entre a y b: "+pi)

if(pi==0){
    console.log("a y b son ortogonales")
}else{
    console.log("a y b no son ortogonales")
}