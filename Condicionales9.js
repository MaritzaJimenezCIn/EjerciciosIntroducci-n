let alumno;
let edad;

alumno=prompt("Eres alumno de FP ?")
edad=parseInt(prompt("Ingresa tu edad"));

if(alumno=="si"){
    if(edad>=18){
        document.write(` <h3>Bienvenid@ </h3> `);
    }else{
        document.write(` <h3>No tienes acceso a la pagina web </h3> `);
    }
}