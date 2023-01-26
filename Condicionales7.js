let alumno;
let edad;

alumno=prompt("Eres alumno de FP ?")
edad=parseInt(prompt("Ingresa tu edad"));

if((alumno=="si") && (edad>=18)){
    document.write(` <h3>Bienvenid@ </h3> `);
}
if((alumno=="si") && (edad<18)){
    document.write(` <h3>No tienes acceso a la pagina web </h3> `);
}