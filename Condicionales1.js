let n1;
let n2;

n1=parseFloat(prompt("Introduce el primer numero"));
n2=parseFloat(prompt("Introduce el segundo numero"));

if(n1>n2){
    document.write(` <h3>El mayor es el numero ${n1} </h3> `);
}else{
    document.write(` <h3>El mayor es el numero ${n2} </h3> `);
}